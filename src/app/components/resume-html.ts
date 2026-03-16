/**
 * Christopher Kenreigh Resume HTML
 * This file contains the HTML resume that opens in a new tab
 */

export const resumeHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Christopher Kenreigh – Staff Product Designer</title>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&family=DM+Serif+Display&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --blue: #2563c7;
      --dark: #111111;
      --mid: #444444;
      --light: #666666;
      --rule: #dddddd;
      --bg: #ffffff;
      --sidebar-bg: #f7f8fa;
    }
    body {
      font-family: 'DM Sans', sans-serif;
      font-size: 10.5pt;
      color: var(--dark);
      background: #e8e8e8;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      padding: 32px 16px;
      min-height: 100vh;
    }
    .page {
      background: var(--bg);
      width: 850px;
      max-width: 100%;
      box-shadow: 0 4px 40px rgba(0,0,0,0.18);
      display: grid;
      grid-template-rows: auto 1fr;
    }
    header {
      padding: 28px 36px 18px;
      border-bottom: 2px solid var(--rule);
    }
    header h1 {
      font-family: 'DM Serif Display', serif;
      font-size: clamp(20pt, 5vw, 30pt);
      font-weight: 400;
      color: var(--dark);
      letter-spacing: -0.5px;
      line-height: 1.1;
    }
    header .title-line {
      font-size: clamp(9pt, 2.5vw, 11pt);
      font-weight: 700;
      color: var(--blue);
      margin: 3px 0 8px;
      letter-spacing: 0.2px;
    }
    header .contact {
      font-size: 9.5pt;
      color: var(--mid);
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      align-items: center;
    }
    header .contact a {
      color: var(--blue);
      text-decoration: none;
      font-weight: 500;
    }
    header .contact span { color: var(--rule); }
    .body {
      display: grid;
      grid-template-columns: 1fr 240px;
    }
    .main {
      padding: 24px 36px 32px;
      border-right: 1px solid var(--rule);
    }
    .section-title {
      font-family: 'DM Serif Display', serif;
      font-size: 14pt;
      font-weight: 400;
      color: var(--dark);
      border-bottom: 1.5px solid var(--dark);
      padding-bottom: 4px;
      margin-bottom: 14px;
    }
    .job { margin-bottom: 20px; }
    .job-title {
      font-size: 10.5pt;
      font-weight: 700;
      color: var(--dark);
    }
    .job-company {
      font-size: 10pt;
      font-weight: 500;
      color: var(--blue);
      text-decoration: none;
    }
    .job-company:hover { text-decoration: underline; }
    .job-meta {
      font-size: 8.5pt;
      color: var(--light);
      margin: 2px 0 6px;
      display: flex;
      align-items: center;
      gap: 6px;
      flex-wrap: wrap;
    }
    .job-meta .material-symbols-outlined {
      color: #00A000;
      font-size: 16px;
      vertical-align: middle;
    }
    .job ul {
      list-style: disc;
      padding-left: 16px;
    }
    .job ul li {
      font-size: 9.5pt;
      color: var(--mid);
      line-height: 1.5;
      margin-bottom: 3px;
    }
    .sidebar {
      background: var(--sidebar-bg);
      padding: 24px 22px 32px;
    }
    .sidebar-section { margin-bottom: 22px; }
    .sidebar .section-title {
      font-size: 12pt;
      border-bottom-color: var(--mid);
    }
    .summary-quote {
      font-size: 9.5pt;
      font-style: italic;
      color: var(--mid);
      line-height: 1.6;
      margin-bottom: 10px;
    }
    .summary-bullets {
      list-style: disc;
      padding-left: 14px;
    }
    .summary-bullets li {
      font-size: 8.8pt;
      color: var(--mid);
      line-height: 1.55;
      margin-bottom: 3px;
    }
    .tag-list {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      margin-top: 6px;
    }
    .tag {
      font-size: 8pt;
      font-weight: 500;
      color: var(--blue);
      background: rgba(37,99,199,0.08);
      border-radius: 3px;
      padding: 2px 7px;
    }
    .dot-list {
      list-style: disc;
      padding-left: 14px;
    }
    .dot-list li {
      font-size: 9pt;
      color: var(--mid);
      line-height: 1.6;
    }
    .edu-degree { font-size: 9.5pt; font-weight: 700; color: var(--dark); }
    .edu-school { font-size: 9pt; color: var(--blue); font-weight: 500; }
    .edu-meta {
      font-size: 8.5pt;
      color: var(--light);
      margin-top: 4px;
      display: flex;
      align-items: center;
      gap: 5px;
      flex-wrap: wrap;
    }
    .edu-meta .material-symbols-outlined {
      color: #00A000;
      font-size: 15px;
      vertical-align: middle;
    }
    @media (max-width: 680px) {
      body { padding: 0; background: var(--bg); align-items: stretch; }
      .page { width: 100%; box-shadow: none; border-radius: 0; }
      header { padding: 20px 18px 14px; }
      header h1 { font-size: 22pt; }
      header .title-line { font-size: 9pt; }
      header .contact { font-size: 9pt; gap: 6px; row-gap: 4px; }
      .body { grid-template-columns: 1fr; grid-template-rows: auto auto; }
      .main { padding: 18px 18px 24px; border-right: none; border-bottom: 1px solid var(--rule); order: 2; }
      .sidebar { padding: 18px 18px 20px; order: 1; border-bottom: 2px solid var(--rule); }
      .section-title { font-size: 13pt; }
      .sidebar .section-title { font-size: 11pt; }
      .job ul li { font-size: 9pt; }
      .job-meta { font-size: 8pt; gap: 4px; }
      .summary-quote { font-size: 9pt; }
      .tag { font-size: 7.5pt; }
    }
    @media (min-width: 681px) and (max-width: 900px) {
      body { padding: 16px 8px; }
      .page { width: 100%; }
      header { padding: 22px 24px 14px; }
      .main { padding: 20px 24px 28px; }
      .sidebar { padding: 20px 16px 28px; }
      .body { grid-template-columns: 1fr 200px; }
    }
    @media print {
      body { background: white; padding: 0; }
      .page { box-shadow: none; width: 100%; }
    }
  </style>
</head>
<body>
<div class="page">

  <header>
    <h1>Christopher Kenreigh</h1>
    <div class="title-line">Staff Product Designer | 0→1 Consumer Product Leadership | Insurance · Safety · Repairs UX | AI-Integrated Design | Design Systems at Scale</div>
    <div class="contact">
      <span style="color: #212121; font-weight:700">480-206-2145</span>
      <span>|</span>
      <a href="mailto:c.kenreigh@gmail.com" style="font-weight:800;">c.kenreigh@gmail.com</a>
      <span>|</span>
      <a href="https://www.linkedin.com/in/kenreigh/" target="_blank">LinkedIn</a>
      <span>|</span>
      <a href="https://seekenreigh.figma.site/" target="_blank">Portfolio</a>
    </div>
  </header>

  <div class="body">

    <main class="main">
      <h2 class="section-title">Experience</h2>

      <div class="job">
        <div class="job-title">Staff Product Designer (Principal)</div>
        <a class="job-company" href="https://www.plexusworldwide.com" target="_blank">Plexus Worldwide</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          05/2024 – Present
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Office
        </div>
        <ul>
          <li>Owned end-to-end 0→1 product design as staff-level IC for a multi-product consumer marketplace—200,000+ users, 3 regions—leading all feature design from research and concept through launch and iterative improvement</li>
          <li>Elevated design quality across the full consumer product suite: redesigned mobile-first insurance-adjacent subscription flows, membership onboarding, and checkout—simplifying complex, high-stakes decisions into clear, elegant experiences; reduced abandonment 43%</li>
          <li>Shipped a 0→1 AI-powered platform integrating LLM and agentic AI into consumer decision flows with responsible, transparent design; reversed operating margin from –17% to +2% in four months</li>
          <li>Leveraged quantitative analytics (Power BI) and qualitative user research to inform design direction; A/B validated prototypes in direct partnership with Product, Engineering, and Data Science</li>
          <li>Architected scalable Figma design system (6-tool consolidation); 60–90% org-wide reuse, 50% faster delivery, 35% sprint velocity increase via AI-assisted prototyping; set the visual and interaction standard for all consumer touchpoints</li>
          <li>Mentored 5 designers on visual craft, qualitative research, and responsible AI; built a high-craft, data-informed design culture</li>
        </ul>
      </div>

      <div class="job">
        <div class="job-title">Senior Product Designer</div>
        <a class="job-company" href="https://www.freeportmcmoran.com" target="_blank">Freeport-McMoRan</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          08/2022 – 10/2023
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Hybrid
        </div>
        <ul>
          <li>Led end-to-end design for regulated digital tools—owning full product lifecycle from research through launch and iteration; improved efficiency 30% through visual design clarity and responsive mobile interfaces</li>
          <li>Facilitated 10+ qualitative research and discovery workshops; partnered with PMs, Engineers, and Data Scientists through Agile delivery lifecycle</li>
          <li>Presented data-driven UX roadmaps to C-suite using clear storytelling; secured approval for 5 major releases; built scalable MUI React design system across web, iOS, and Android</li>
        </ul>
      </div>

      <div class="job">
        <div class="job-title">Senior Product Designer</div>
        <a class="job-company" href="https://www.opentechalliance.com" target="_blank">OpenTech Alliance</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          05/2021 – 08/2022
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Hybrid
        </div>
        <ul>
          <li>Championed design vision to C-suite through storytelling; secured budget for 3 new UX initiatives; elevated visual design quality and design maturity org-wide</li>
          <li>Led 0→1 redesign of consumer-facing Point of Sale kiosk—visual design excellence, mobile-first interaction, conversion best practices—boosted task completion 75%</li>
          <li>Designed compliant consumer data capture flows—100% risk elimination; directly analogous to trust-sensitive insurance and fintech consumer flows</li>
        </ul>
      </div>

      <div class="job">
        <div class="job-title">UX Design Lead</div>
        <a class="job-company" href="https://www.siemens.com" target="_blank">Siemens</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          07/2020 – 05/2021
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Remote
        </div>
        <ul>
          <li>Unified design systems and set visual quality standards across 4 simultaneous regulated product initiatives; component documentation reduced engineering dissemination needs 50%</li>
          <li>Secured executive approval for 2 high-impact initiatives through design storytelling; designed 3D and AutoCAD-integrated UI for complex data visualization applications</li>
        </ul>
      </div>

      <div class="job">
        <div class="job-title">Senior UX Designer</div>
        <a class="job-company" href="https://www.glynlyon.com" target="_blank">Glynlyon Inc</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          02/2014 – 04/2019
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Office
        </div>
        <ul>
          <li>Designed WCAG/ADA-compliant inclusive consumer experiences for millions of users; applied iOS and Android platform guidelines for visually excellent, accessible interfaces</li>
          <li>Drove qualitative research and data-informed design decisions through user research and usability testing; roadmapped features increasing ease of use 65%</li>
          <li>Led Design Thinking workshops to define user needs, map consumer journeys, and set design-first culture across the organization</li>
        </ul>
      </div>
    </main>

    <aside class="sidebar">

      <div class="sidebar-section">
        <h2 class="section-title">Summary</h2>
        <p class="summary-quote" style="color: #212121; font-weight:700">"Staff product designer specializing in 0→1 consumer product design—shaping how products look, feel, and work for millions of users through exceptional visual craft, AI-integrated UX, and design systems at scale across insurance-adjacent, marketplace, and fintech platforms."</p>
        <ul class="summary-bullets">
          <li>12+ years end-to-end consumer product design</li>
          <li>0→1 feature leadership: insurance, safety, marketplace, fintech</li>
          <li>Visual design excellence at scale</li>
          <li>Qualitative research + A/B testing + analytics</li>
          <li>AI-integrated UX: LLM, agentic AI, responsible AI</li>
          <li>Design systems at 60–90% org reuse</li>
          <li>Design storytelling to cofounders &amp; C-suite</li>
          <li>Figma, WCAG, iOS/Android, mobile-first</li>
        </ul>
      </div>

      <div class="sidebar-section">
        <h2 class="section-title">Key Achievements</h2>
        <ul class="dot-list">
          <li>43% checkout abandonment reduction</li>
          <li>–17% → +2% margin via AI platform</li>
          <li>60–90% design system org reuse</li>
          <li>75% task completion rate lift</li>
          <li>10+ cofounder/C-suite approvals</li>
          <li>100% regulatory compliance on consumer flows</li>
        </ul>
      </div>

      <div class="sidebar-section">
        <h2 class="section-title">Skills</h2>
        <div class="tag-list">
          <span class="tag">Staff Product Design</span>
          <span class="tag">0→1 Feature Design</span>
          <span class="tag">Visual Design Excellence</span>
          <span class="tag">Consumer Mobile &amp; Web UX</span>
          <span class="tag">Figma</span>
          <span class="tag">Design Systems at Scale</span>
          <span class="tag">A/B Testing</span>
          <span class="tag">Qualitative Research</span>
          <span class="tag">Quantitative Analytics</span>
          <span class="tag">Design Storytelling</span>
          <span class="tag">Insurance &amp; Fintech UX</span>
          <span class="tag">Marketplace UX</span>
          <span class="tag">WCAG Accessibility</span>
          <span class="tag">iOS &amp; Android</span>
          <span class="tag">Mobile-First Design</span>
          <span class="tag">Conversion Optimization</span>
          <span class="tag">Coded Prototypes</span>
          <span class="tag">MUI React</span>
          <span class="tag">Information Architecture</span>
        </div>
      </div>

      <div class="sidebar-section">
        <h2 class="section-title">AI &amp; Emerging Tech</h2>
        <div class="tag-list">
          <span class="tag">LLM-Based Workflows</span>
          <span class="tag">Agentic AI Design</span>
          <span class="tag">AI-Integrated UX</span>
          <span class="tag">RAG Systems</span>
          <span class="tag">Multimodal AI</span>
          <span class="tag">AI-Powered Consumer Features</span>
          <span class="tag">Machine Learning UX</span>
          <span class="tag">Responsible AI</span>
        </div>
      </div>

      <div class="sidebar-section">
        <h2 class="section-title">Education</h2>
        <div class="edu-degree">Bachelor of Art</div>
        <div class="edu-school">The Art Institute of Phoenix</div>
        <div class="edu-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          09/2002 – 09/2005
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ
        </div>
        <div style="margin-top:10px; font-size:8pt; color:var(--mid); line-height:1.6;">
          <strong style="color:var(--dark);">Certs:</strong> Agile / PM (NASBA 891/1000) · AI Test Automation (100%) · Microsoft Data &amp; Business (95%) · CompTIA A+ &amp; Net+
        </div>
      </div>

    </aside>
  </div>
</div>
</body>
</html>`;

/**
 * Opens the resume HTML in a new browser tab using Blob URL
 */
export function openResumeInNewTab(): void {
  // Create a Blob from the HTML string
  const blob = new Blob([resumeHTML], { type: 'text/html' });
  
  // Generate a blob URL
  const blobURL = URL.createObjectURL(blob);
  
  // Open in new tab
  const newWindow = window.open(blobURL, '_blank');
  
  // Clean up the blob URL after a delay to ensure the page loads
  if (newWindow) {
    setTimeout(() => {
      URL.revokeObjectURL(blobURL);
    }, 1000);
  }
}
