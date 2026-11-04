/* ==========================================================
   EDIT HERE: all project content lives in this list.
   Leave a link as "" to show a labelled placeholder button.
   To add a link, put a full URL ("https://...") or a file in
   this repository (for example "report.pdf" or "images/output.png").
   To add another project, copy the whole { ... } block below.
   ========================================================== */
const PROJECTS = [
  {
    id: "network-traffic-monitor",
    title: "Python-Based Network Traffic Monitoring Tool",
    tagline: "A real-time packet monitor that logs every TCP/UDP packet and raises alerts on traffic to commonly abused ports.",
    tags: ["Python", "Scapy", "Packet Analysis", "Logging", "Threat Detection", "UML"],
    links: {
      github: "",   // GitHub repository with the source code
         },
    what: "A Python tool that watches live network traffic, records every TCP and UDP packet in a timestamped log file, and prints and logs an alert whenever a packet is headed for a port that attackers commonly abuse: SSH (22), Telnet (23), DNS (53), DCE RPC (135), NetBIOS (139), SMB (445), RDP (3389) and 4444 (associated with Metasploit).",
    why: "It was my final-year major project in Computer Science and Engineering (Cyber Security). Networks keep growing and legacy tools often struggle with real-time visibility, so we wanted to understand, by building it, how packet capture, logging and detection work end to end. These are the foundations behind SIEM and EDR tools.",
    objective: [
      "Capture packets from a network interface in real time.",
      "Extract source and destination IP addresses, ports and protocol from every packet.",
      "Keep a timestamped log of all traffic for later forensic review.",
      "Flag suspicious activity using port-based rules and alert the administrator.",
      "Design the system so it can grow: GUI, dashboards, database storage, email/SMS alerts, machine-learning anomaly detection and IDS/SIEM integration (documented as future scope).",
    ],
    tools: [
      ["Python 3", "core language"],
      ["Scapy", "live sniffing (sniff) and the IP, TCP and UDP packet layers"],
      ["logging and datetime modules", "timestamped log files and alert entries"],
      ["Windows 10/11 and pip", "development and test environment, run with administrator privileges"],
      ["UML", "class, use case, activity and sequence diagrams, plus a three-tier architecture"],
    ],
    did: [
      "Surveyed existing Python monitoring tools (Scapy, PyShark, Tshark) and documented their limits: scalability, real-time speed, dependency management and usability.",
      "Defined functional and non-functional requirements, and hardware tiers for small, medium and enterprise networks.",
      "Implemented the tool: created a timestamped log file, defined the suspicious-ports dictionary, wrote the packet-processing function and started live capture with Scapy.",
      "Tested on a live Windows machine and verified the log entries and alerts in the output."
    ],
   
    skills: [
      "Packet capture and protocol analysis (TCP, UDP, DNS)",
      "Python scripting for security tooling",
      "Rule-based detection and alert design",
      "Security logging for forensics and audit",
      "Awareness of risky ports and services (SSH, Telnet, SMB, RDP)",
      "System design and UML modelling",
      "Technical writing and presenting (report and viva)",
    ],
    outcome: [
      "A working prototype that captured live traffic and wrote lines such as “Traffic: UDP | source:port → destination:port” to a log file.",
      "Alerts fired on suspicious ports; in the recorded test, DNS traffic on port 53 triggered [ALERT] messages.",
      "Known limitation: detection is rule-based on port numbers, so routine DNS traffic also raises alerts. Reducing this noise is a clear next step.",
      "GUI, dashboards, database storage, email/SMS alerts and machine-learning detection were designed and documented as future scope, not built.",
    ],
    relevance: [
      "It follows the same loop a SOC runs every day: collect, parse, log, detect, alert.",
      "Suspicious-port checks are a simple version of the detection rules written in SIEM tools such as Splunk and Microsoft Sentinel.",
      "Logging every connection with timestamps supports incident investigation and audit.",
      "Planned extensions (threat-intelligence feeds, SOAR-style automated response, cloud monitoring) match how modern security teams work.",
    ],
   
    screenshots: [
      { label: "Installing Scapy", file: "images/01-install-scapy.png", src: "" },
      { label: "Suspicious ports setup", file: "images/02-suspicious-ports.png", src: "" },
      { label: "Packet processing function", file: "images/03-packet-processing.png", src: "" },
      { label: "Live output with alerts", file: "images/04-live-output.png", src: "" },
      { label: "System architecture", file: "images/05-architecture.png", src: "" },
      { label: "Class diagram", file: "images/06-class-diagram.png", src: "" },
    ],
  },
];

/* ---------- Rendering (no need to edit below) ---------- */
const $ = (s) => document.querySelector(s);
const list = (arr) => "<ul>" + arr.map((x) => `<li>${x}</li>`).join("") + "</ul>";
const numbered = (arr) => "<ol>" + arr.map((x) => `<li>${x}</li>`).join("") + "</ol>";

function linkButton(icon, label, url) {
  if (url) {
    return `<a class="btn" href="${url}" target="_blank" rel="noopener">${icon} ${label}</a>`;
  }
  return `<span class="btn ph" title="Placeholder: add this link in script.js">${icon} ${label} <small>link needed</small></span>`;
}

function renderHome() {
  $("#project-list").innerHTML = PROJECTS.map((p) => `
    <a class="card" href="#${p.id}">
      <h3>${p.title}</h3>
      <p>${p.tagline}</p>
      <div class="tags">${p.tags.slice(0, 4).map((t) => `<span class="tag">${t}</span>`).join("")}</div>
      <span class="more">View project details →</span>
    </a>`).join("");
}

function renderProject(p) {
  const panel = (title, html, id) => `<section class="panel"${id ? ` id="${id}"` : ""}><h2>${title}</h2>${html}</section>`;

  const shots = p.screenshots.map((s) => s.src
    ? `<figure class="shot"><img src="${s.src}" alt="${s.label}" loading="lazy"><figcaption>${s.label}</figcaption></figure>`
    : `<figure class="shot"><div class="box"><strong>Image placeholder</strong><span>${s.label}</span><span>Add file: ${s.file}</span></div><figcaption>${s.label}</figcaption></figure>`
  ).join("");

  const evidence = list(p.evidence.map((e) =>
    `<strong>${e.label}</strong>: ${e.desc} ` +
    (e.url ? `<a href="${e.url}" target="_blank" rel="noopener">Open</a>` : `<span class="chip-ph">link placeholder</span>`)
  ));

  $("#project-view").innerHTML = `
    <a class="back" href="#">← All projects</a>
    <header class="phead">
      <p class="eyebrow">${p.eyebrow}</p>
      <h1>${p.title}</h1>
      <p class="lead">${p.tagline}</p>
      <div class="tags">${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
    </header>
    <dl class="meta">${p.meta.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("")}</dl>
    <div class="actions">
      ${linkButton("💻", "GitHub repository", p.links.github)}
      <button class="btn" type="button" data-scroll="shots">🖼️ Screenshots</button>
      ${linkButton("📄", "Write-up", p.links.writeup)}
      ${linkButton("▶️", "Demo", p.links.demo)}
      ${linkButton("📚", "Technical documentation", p.links.docs)}
    </div>
    ${panel("What was the project?", `<p>${p.what}</p>`)}
    ${panel("Why did I build it?", `<p>${p.why}</p>`)}
    ${panel("What was the objective?", list(p.objective))}
    ${panel("What tools and technologies did I use?", list(p.tools.map(([n, d]) => `<strong>${n}</strong>: ${d}`)))}
    ${panel("What did I actually do?", numbered(p.did) + `<p class="note">${p.role}</p>`)}
    ${panel("What skills did I develop?", list(p.skills))}
    ${panel("What was the outcome?", list(p.outcome))}
    ${panel("What is the real-world relevance?", list(p.relevance))}
    ${panel("Evidence", evidence)}
    ${panel("Screenshots", `<div class="shots">${shots}</div>`, "shots")}
  `;
  document.title = p.title + " | Cybersecurity Portfolio";
}

function route() {
  const id = decodeURIComponent(location.hash.slice(1));
  const project = PROJECTS.find((p) => p.id === id);
  $("#home-view").hidden = !!project;
  $("#project-view").hidden = !project;
  if (project) {
    renderProject(project);
  } else {
    document.title = "Cybersecurity Portfolio | G. Laxmi Tejaswini";
  }
  window.scrollTo(0, 0);
}

document.addEventListener("click", (e) => {
  const b = e.target.closest("[data-scroll]");
  if (b) {
    const t = document.getElementById(b.dataset.scroll);
    if (t) t.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  const ph = e.target.closest(".btn.ph");
  if (ph) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = "Placeholder: add this link in script.js";
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2200);
  }
});

window.addEventListener("hashchange", route);
renderHome();
route();
