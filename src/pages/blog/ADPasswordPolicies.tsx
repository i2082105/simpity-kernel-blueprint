import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ArrowLeft } from "lucide-react";

export default function ADPasswordPolicies() {
  return (
    <Layout>
      <article className="pt-32 pb-24 px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl">
          {/* Back link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Meta */}
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-6">
            Simpity Research &middot; February 19, 2026
          </p>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-[2.4rem] font-bold text-foreground leading-tight mb-8">
            Your AD Password Policies Are{" "}
            <span className="text-primary">Security Theater</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground italic mb-12 pb-12 border-b border-border">
            Here's proof with scripts you can test today. Plus a defense that actually works.
          </p>

          {/* Body */}
          <div className="space-y-5 text-foreground leading-relaxed">
            <p>
              Last week Microsoft published a three-phase plan to kill the NTLM authentication protocol. My LinkedIn feed filled up with celebrations. And I get it, the protocol has been a source of pain for decades.
            </p>
            <p>
              But almost nobody in those threads seems to understand a critical distinction, and it's been bugging me enough to write this up with working proof-of-concept scripts so you can test it in your own lab.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-14 mb-5">
              First: NTLM hash and NTLM protocol are two different things
            </h2>

            <p>This confusion is everywhere, even in posts from people who should know better. Let me clear it up.</p>

            <p>
              The <strong className="text-foreground font-semibold">NTLM protocol</strong> is the challenge-response authentication mechanism. That's what Microsoft is deprecating. When you hear about pass-the-hash relay attacks, CVE-2025-24054, and all those headlines from last year, that's the protocol side. Fair enough, it deserves to die.
            </p>

            <p>
              The <strong className="text-foreground font-semibold">NTLM hash</strong> is just how Windows calculates and stores your password. You type your password, Windows computes an MD4 hash over its UTF-16LE encoding, and stores the resulting 16-byte value in Active Directory. This hash is commonly called the "NTLM hash" or "NT hash" because it's used in the NTLM protocol. But here's what most people miss: <strong className="text-foreground font-semibold">Kerberos uses the same hash</strong>. When your organization migrates from NTLM protocol to Kerberos (which is the whole point of Microsoft's deprecation roadmap), that same NT hash will still be sitting in AD, doing the same job, just serving a different protocol.
            </p>

            <p>
              Why does this matter? Because the attack I'm about to show you doesn't touch the NTLM protocol at all. It targets how the hash gets written to Active Directory. Killing the protocol changes nothing about this vulnerability.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-14 mb-5">
              The attack: bypassing every password policy in your domain
            </h2>

            <p>
              Windows provides a{" "}
              <a
                href="https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-samr/538222f7-1b89-4811-949a-0eac62e38dce"
                className="text-primary border-b border-transparent hover:border-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                SamrSetInformationUser
              </a>{" "}
              function through its Remote Procedure Call (RPC) interface. This function lets you set a user's password hash directly in Active Directory, without submitting the actual password.
            </p>

            <p>
              Think about what that means. Windows never sees the password itself. It only receives the 16-byte hash. So every layer of password validation you've configured simply never gets called:
            </p>

            <ul className="list-disc pl-6 space-y-2 marker:text-primary">
              <li>GPO password complexity rules? Skipped.</li>
              <li>Custom password filter DLLs checking against breached dictionaries? Never invoked.</li>
              <li>Third-party password policy tools with character substitution logic? They don't even know anything happened.</li>
            </ul>

            <p>
              The only requirement is Password Reset permissions on the target account. If you've administered any sizeable AD environment, you know how generously those tend to be handed out.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-10 mb-4">
              Try it yourself
            </h3>

            <p>
              I've put together a PowerShell script that demonstrates this. It calls SamrSetInformationUser and sets a user's password hash directly, bypassing all password complexity checks.
            </p>

            <a
              href="#"
              className="inline-block bg-primary/20 text-primary font-mono text-sm px-6 py-3 rounded-md border border-primary/40 hover:bg-primary/30 transition-colors my-2"
            >
              ↓ Download SetNtlmPassword.zip
            </a>

            <p>Here's how to run it:</p>

            <ol className="list-decimal pl-6 space-y-2 marker:text-primary marker:font-mono">
              <li>Create a folder (e.g., <code className="bg-secondary px-1.5 py-0.5 rounded font-mono text-sm border border-border">C:\SetPassword</code>)</li>
              <li>Copy the script into that folder</li>
              <li>Run: <code className="bg-secondary px-1.5 py-0.5 rounded font-mono text-sm border border-border">powershell .\SetNtlmPassword.ps1</code></li>
              <li>Enter the username and a new password</li>
            </ol>

            {/* Attack screenshot */}
            <div className="my-8 bg-card border border-border rounded-lg overflow-hidden">
              <img
                src="/blog/cmd-attack.png"
                alt="Running the attack script"
                className="w-full h-auto block"
              />
              <div className="px-5 py-3 font-mono text-xs text-muted-foreground border-t border-border leading-relaxed">
                Running the attack script. Password for testuser1 is now literally "1". Every GPO complexity rule was active. None of them fired.
              </div>
            </div>

            <p>
              That's it. The user "testuser1" now has a password that is the single digit "1". Every password policy in the domain was configured and active. None of them fired.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-14 mb-5">
              The defense: hooking SamrSetInformationUser inside LSASS
            </h2>

            <p>
              All Active Directory operations on a Domain Controller happen inside the LSASS.EXE process. That means we can find the SamrSetInformationUser function inside that process and block its call when someone tries to write a hash directly.
            </p>

            <p>
              This requires two conditions: you need to be on the Domain Controller itself, and the LSASS process must not be locked down by Credential Guard, LSA Protection (PPL), or an endpoint security product that prevents injection.
            </p>

            <p>
              I wrote a second PowerShell script that demonstrates this defense. It injects into the LSASS process address space, hooks the SamrSetInformationUser function, and inside the hook prevents the original function from executing when it detects a direct password hash write. For injection and hooking it uses{" "}
              <a
                href="https://easyhook.github.io"
                className="text-primary border-b border-transparent hover:border-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                EasyHook
              </a>.
            </p>

            <a
              href="#"
              className="inline-block bg-primary/20 text-primary font-mono text-sm px-6 py-3 rounded-md border border-primary/40 hover:bg-primary/30 transition-colors my-2"
            >
              ↓ Download Protect.zip
            </a>

            <h3 className="text-xl font-semibold text-foreground mt-10 mb-4">
              Try the defense yourself
            </h3>

            <ol className="list-decimal pl-6 space-y-2 marker:text-primary marker:font-mono">
              <li>Copy the script into the same <code className="bg-secondary px-1.5 py-0.5 rounded font-mono text-sm border border-border">C:\SetPassword</code> folder</li>
              <li>
                Download and unpack{" "}
                <a
                  href="http://easyhook.github.io/download.html?url=https://github.com/EasyHook/EasyHook/releases/download/v2.7.6789.0/EasyHook-2.7.6789.0-Binaries.zip"
                  className="text-primary border-b border-transparent hover:border-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  EasyHook 2.7.6789.0
                </a>{" "}
                into the same folder
              </li>
              <li>
                If needed, adjust the EasyHook path in the script:<br />
                <code className="bg-secondary px-1.5 py-0.5 rounded font-mono text-sm border border-border">
                  $easyHookPath = ".\EasyHook-2.7.6789.0-Binaries\projects\easyhook\Deploy\NetFX4.0\EasyHook.dll"
                </code>
              </li>
              <li>Run: <code className="bg-secondary px-1.5 py-0.5 rounded font-mono text-sm border border-border">powershell .\Protect.ps1</code></li>
            </ol>

            {/* Protection script screenshot */}
            <div className="my-8 bg-card border border-border rounded-lg overflow-hidden">
              <img
                src="/blog/cmd-protect.png"
                alt="The protection script injecting into LSASS"
                className="w-full h-auto block"
              />
              <div className="px-5 py-3 font-mono text-xs text-muted-foreground border-t border-border leading-relaxed">
                The protection script injecting into LSASS. It locates samsrv.dll, finds SamrSetInformationUser at 0x7FFA516F0280, and installs the hook successfully.
              </div>
            </div>

            <p>
              Read the output carefully. The script finds samsrv.dll inside LSASS, locates the SamrSetInformationUser function address, installs the hook, and starts monitoring.
            </p>

            <p>Now try running the attack script again. This time you'll see it fail:</p>

            {/* Blocked attack screenshot */}
            <div className="my-8 bg-card border border-border rounded-lg overflow-hidden">
              <img
                src="/blog/cmd-blocked.png"
                alt="Attack blocked by the hook"
                className="w-full h-auto block"
              />
              <div className="px-5 py-3 font-mono text-xs text-muted-foreground border-t border-border leading-relaxed">
                Same attack, same script, same target user. This time: NTSTATUS 0xC0000022 — access denied. The hook intercepted the call before the hash reached AD.
              </div>
            </div>

            <p>
              The hook intercepts the call and returns an access denied error before the hash ever reaches AD.
            </p>

            <p>
              You can also check the log file at <code className="bg-secondary px-1.5 py-0.5 rounded font-mono text-sm border border-border">C:\Windows\Temp\SetPassword_Hook.log</code> to see every blocked attempt, along with cases where the function was allowed to proceed normally:
            </p>

            {/* Log file screenshot */}
            <div className="my-8 bg-card border border-border rounded-lg overflow-hidden">
              <img
                src="/blog/log-output.png"
                alt="SetPassword_Hook.log output"
                className="w-full h-auto block"
              />
              <div className="px-5 py-3 font-mono text-xs text-muted-foreground border-t border-border leading-relaxed">
                SetPassword_Hook.log showing the hook installation and a blocked SamrSetInformationUser call with InformationClass: UserInternal1Information (18).
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-foreground mt-14 mb-5">
              Why this matters right now
            </h2>

            <p>
              Everyone is celebrating the NTLM protocol deprecation. And yes, killing the protocol is the right move. But the hash that gets stored in AD is the same hash that Kerberos uses. SamrSetInformationUser is an RPC function, not an NTLM protocol feature. The ability to bypass every password policy in your domain survives the migration to Kerberos completely intact.
            </p>

            {/* Callout */}
            <div className="bg-card border-l-4 border-primary rounded-r-lg p-5 my-7">
              <p className="mb-0">
                <strong className="text-primary">Important:</strong> The scripts shared here are for educational and testing purposes. They are not production-ready. There are more reliable methods for process injection and function hooking, and you'd likely need to configure exceptions for legacy applications that legitimately use this API.
              </p>
            </div>

            <p>
              But the underlying problem is real, and GPOs and password filters can't solve it because they operate at the wrong level. You need to intercept where the hash meets the directory, and that means you need to be inside LSASS.
            </p>

            <p>
              My team at Simpity has been working inside Windows kernel and LSASS internals for over 17 years. If you're building identity security products and want to discuss how to handle this class of attacks properly in production, I'd genuinely enjoy that conversation.
            </p>

            {/* Divider */}
            <div className="border-t border-border my-14" />

            {/* Author box */}
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-foreground font-semibold text-base mb-1">Alexei Belous</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                CTO at Simpity. 17+ years in Windows kernel development, LSASS internals, and Active Directory security. Building R&D for security vendors who need deep Windows expertise.
              </p>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
