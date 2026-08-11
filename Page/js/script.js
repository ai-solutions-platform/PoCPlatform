const projects = {
  /* =====================================
     AGENTIC AI CAR ASSIST
  ===================================== */

  car: {
    kicker: "Knowledge & Product Support",

    title: "Agentic AI Car Assist",

    summary:
      "AI-powered knowledge assistant trained with manuals, videos and technical documentation. Users can ask questions in natural language and receive fast, contextual answers from structured product knowledge.",

    value: [
      [
        "Ask naturally",
        "Get direct answers without searching across manuals.",
      ],
      [
        "Connected knowledge",
        "Unify manuals, videos and diagrams in one trusted source.",
      ],
      [
        "Guided resolution",
        "Receive contextual procedures, media and recommended next steps.",
      ],
    ],

    flowTitle: "From documentation to answer",

    outcomes: ["Faster support", "Consistent answers", "Less search time"],

    what: "Transforms technical product information into an accessible conversational support experience. Instead of manually searching through multiple manuals or documents, users can ask direct questions and retrieve relevant guidance, explanations, procedures and supporting media.",

    capabilities: [
      "Natural-language Q&A",
      "Multisource knowledge",
      "Diagrams & videos",
      "Step-by-step procedures",
    ],

    how: [
      [
        "Upload knowledge sources",
        "Manuals, guides, videos and technical documentation are added to the knowledge base.",
      ],
      [
        "Structure the information",
        "Content is segmented, organized and connected for reliable retrieval.",
      ],
      [
        "Ask in natural language",
        "The user asks a technical question without manually browsing the source material.",
      ],
      [
        "Return contextual guidance",
        "The assistant retrieves the most relevant information and presents the answer with supporting content.",
      ],
    ],

    useCase:
      "The assistant retrieves the relevant diagnostic information, explains possible causes, recommends the next diagnostic steps and can return supporting procedures, diagrams or videos.",

    builtFor: [
      "Automotive",
      "Technical Support",
      "Service Workshops",
      "Product Knowledge",
      "Training",
    ],
  },

  /* =====================================
     GEN XR
  ===================================== */

  genxr: {
    kicker: "Immersive Training",

    title: "GEN XR",

    summary:
      "Immersive VR system for training visualization and guided processes. Users can experience procedures in 3D, practice in realistic virtual environments and improve efficiency through interactive simulations.",

    value: [
      [
        "Learn by doing",
        "Practice realistic procedures in an interactive virtual environment.",
      ],
      [
        "Guided in 3D",
        "Follow step-by-step procedures with clear visual guidance.",
      ],
      [
        "Safe to practice",
        "Repeat scenarios and make mistakes without any real-world risk.",
      ],
    ],

    flowTitle: "From procedure to practice",

    outcomes: ["Faster onboarding", "Measurable skills", "Safer practice"],

    what: "Creates safe, repeatable and immersive training environments where users can learn processes through direct interaction. Real equipment, plant areas or procedures can be represented virtually so employees can practice before performing the task in the physical environment.",

    capabilities: [
      "Immersive VR modules",
      "Interactive digital twins",
      "Step validation and guidance",
      "Performance tracking"
    ],

    how: [
      [
        "Build scenario",
        "Equipment, workstations and process elements are recreated in a 3D environment.",
      ],
      [
        "Enter simulation",
        "The user steps into an immersive VR environment configured with the training flow.",
      ],
      [
        "Practice the task",
        "The user performs the procedure hands-on, guided step by step in a safe space.",
      ],
      [
        "Track results",
        "Completion time, errors and user performance can be reviewed after the simulation.",
      ],
    ],

    useCase:
      "A new plant operator practices assembling or configuring a system in VR before accessing the real workstation. The simulation guides the user through the process, detects incorrect steps and allows repetition without affecting production.",

    builtFor: [
      "Industrial Training",
      "Plant Operations",
      "Technical Education"
    ],
  },

  /* =====================================
     AUDIO AI
  ===================================== */

  audio: {
    kicker: "Predictive Monitoring",

    title: "Audio AI Detection",

    summary:
      "AI-powered noise detection and signal analysis to monitor equipment health, detect anomalies, visualize advanced audio insights and provide guided solutions step by step.",

    what: "Uses acoustic signals as an additional source of equipment health information. Audio is analyzed to identify abnormal behavior, compare patterns and help users understand whether a machine or component may require attention.",

    capabilities: [
      "Equipment noise monitoring",
      "Anomaly detection",
      "Audio signal visualization",
      "Pattern comparison",
      "Health-status insights",
      "Guided troubleshooting recommendations",
    ],

    how: [
      [
        "Capture audio",
        "Equipment sound is collected through an available microphone or sensor.",
      ],
      [
        "Analyze the signal",
        "Relevant acoustic features and patterns are extracted from the recording.",
      ],
      [
        "Detect anomalies",
        "The signal is compared against expected or known behavior.",
      ],
      [
        "Guide the user",
        "The platform presents the detected issue and recommended troubleshooting actions.",
      ],
    ],

    useCase:
      "A maintenance technician records a motor that sounds different from normal operation. The system identifies an unusual acoustic pattern, highlights the affected signal region and recommends the next inspection steps.",

    builtFor: [
      "Manufacturing",
      "Maintenance",
      "Quality",
      "Equipment Monitoring",
      "Field Service",
    ],
  },

  /* =====================================
     TPA CHARLIE - T-VAG
  ===================================== */

  charlie: {
    kicker: "Troubleshooting Assistant",

    title: "T-VAG",

    summary:
      "AI-powered virtual assistant for guided troubleshooting and maintenance support. It helps resolve issues step by step, capture evidence with images, use voice commands and generate reports automatically.",

    what: "Acts as a hands-free troubleshooting companion for technicians and operators. Charlie guides the user through a structured diagnostic process while capturing the evidence generated during the activity and creating a consistent service record.",

    capabilities: [
      "Voice-driven interaction",
      "Guided troubleshooting flows",
      "Step-by-step maintenance support",
      "Image evidence capture",
      "Contextual instructions",
      "Automatic report generation",
    ],

    how: [
      [
        "Describe the issue",
        "The user explains the problem using voice or text.",
      ],
      [
        "Follow guided checks",
        "Charlie presents the diagnostic or maintenance steps in sequence.",
      ],
      [
        "Capture evidence",
        "Images and observations can be added during the troubleshooting process.",
      ],
      [
        "Generate the report",
        "The session is summarized into a structured report with findings and actions.",
      ],
    ],

    useCase:
      "A technician reports an equipment failure while working on site. Charlie guides the technician through the inspection, requests photos of key components, records the results and automatically generates the maintenance report.",

    builtFor: [
      "Field Service",
      "Maintenance",
      "Plant Operations",
      "Technical Support",
      "Service Documentation",
    ],
  },

  /* =====================================
     TRAINING
  ===================================== */

  training: {
    kicker: "Learning & Workforce Development",

    title: "Training & Qualification Platform",

    summary:
      "Connect learning, practical assessment and qualification in one measurable training journey.",

    value: [
      [
        "One learning journey",
        "Combine theory, guided practice and assessment in one platform.",
      ],
      [
        "Objective evaluation",
        "Measure knowledge, practical execution and competency evidence.",
      ],
      [
        "Qualification visibility",
        "Track readiness, progress and certifications across the workforce.",
      ],
    ],

    flowTitle: "From learning to qualification",

    outcomes: ["Consistent training", "Visible progress", "Verified skills"],

    example: {
      labels: ["Need", "Journey", "Result"],
      values: [
        "A technician must qualify for a new maintenance procedure.",
        "The platform combines theory, guided practice and a scored practical assessment.",
        "Managers see competency evidence and readiness in one dashboard.",
      ],
    },

    what: "Supports the complete qualification cycle of plant personnel: learning, theoretical evaluation, practical assessment and skills visibility. The platform can incorporate Kirkpatrick-style evaluation principles to measure learning effectiveness and provide a broader view of workforce capability.",

    capabilities: [
      "Learning paths",
      "Theory assessments",
      "VR & practical training",
      "Skills dashboards",
    ],

    how: [
      [
        "Assign a path",
        "A tailored learning path is assigned based on the target role or qualification.",
      ],
      [
        "Learn the theory",
        "The user completes theory modules with assessments to build foundational knowledge.",
      ],
      [
        "Practice & assess",
        "Guided practical exercises and scored assessments validate hands-on execution.",
      ],
      [
        "Qualify skills",
        "Verified competencies and certifications are recorded once requirements are met.",
      ],
    ],

    useCase:
      "The platform combines theory, guided practice and a scored practical assessment.",

    builtFor: [
      "Workforce Development",
      "Plant Training",
      "Skills Management",
    ],
  },

  /* =====================================
     NFC / WAREHOUSE
  ===================================== */

  nfc: {
    kicker: "Warehouse Intelligence",

    title: "Smart Warehouse Identification",

    summary:
      "NFC-based identification system for warehouse stock tracking and operational guidance, providing users with easier access to inventory status, replenishment information, placement guidance and return-related insights.",

    what: "Connects physical warehouse items or locations with digital information through NFC identification. Users can quickly identify stock, access relevant warehouse data and receive operational support for replenishment, placement and recurring inventory issues.",

    capabilities: [
      "NFC-based item or location identification",
      "Stock and warehouse tracking",
      "Replenishment guidance",
      "Placement recommendations",
      "Return and issue visibility",
      "Quick access to item information",
      "Operational decision support",
    ],

    how: [
      [
        "Identify with NFC",
        "A warehouse item, bin or location is associated with an NFC tag.",
      ],
      [
        "Open the digital record",
        "Scanning the tag gives the user immediate access to the related information.",
      ],
      [
        "Analyze stock context",
        "The platform shows stock levels, movement, returns and other useful warehouse data.",
      ],
      [
        "Guide the operation",
        "The user receives recommendations on what to order, where to place it or what action to take.",
      ],
    ],

    useCase:
      "A warehouse operator scans an NFC tag on a storage location. The platform shows current stock, identifies items with unusually high returns and recommends whether replenishment or rearrangement is needed.",

    builtFor: [
      "Warehouses",
      "Inventory Management",
      "Logistics",
      "Material Flow",
      "Stock Operations",
    ],
  },

  /* =====================================
     BCI — HARLEY-DAVIDSON
  ===================================== */

  bci: {
    kicker: "Motorcycle Diagnostics & Calibration",

    title: "BCI – Harley-Davidson",

    summary:
      "Diagnostic interface for Harley-Davidson motorcycles that enables calibrations, maintenance routines and fault diagnostics directly from the vehicle.",

    what: "Connects directly to the motorcycle's electronic systems to read data, run calibrations and support maintenance. Technicians can diagnose faults, adjust vehicle parameters and follow guided service procedures without relying on scattered manual references.",

    capabilities: [
      "Motorcycle fault diagnostics",
      "ECU calibration and adjustments",
      "Guided maintenance routines",
      "Live vehicle data reading",
    ],

    how: [
      [
        "Connect to the motorcycle",
        "The BCI links to the vehicle's diagnostic port to establish communication.",
      ],
      [
        "Read vehicle data",
        "Fault codes, sensor values and system status are retrieved from the motorcycle.",
      ],
      [
        "Calibrate and adjust",
        "The technician runs calibrations and parameter adjustments as required.",
      ],
      [
        "Guide maintenance",
        "The tool presents the recommended service steps and confirms the results.",
      ],
    ],

    useCase:
      "A technician connects the BCI to a Harley-Davidson motorcycle, reads active fault codes, runs the required calibration and follows the guided maintenance sequence until the issue is resolved.",

    builtFor: [
      "Motorcycle Service",
      "Diagnostics",
      "Maintenance Workshops",
    ],
  },

  /* =====================================
     VCI — VEHICLE COMMUNICATION INTERFACE
  ===================================== */

  vci: {
    kicker: "Vehicle Diagnostics & Calibration",

    title: "VCI – Vehicle Communication Interface",

    summary:
      "Vehicle Communication Interface with a dedicated Handset that enables calibrations, maintenance and diagnostics for cars.",

    what: "Connects to a car's electronic systems through the VCI and its Handset to read data, run calibrations and support maintenance. Technicians can diagnose faults, adjust vehicle parameters and follow guided service procedures directly at the vehicle.",

    capabilities: [
      "Vehicle fault diagnostics",
      "ECU calibration and adjustments",
      "Guided maintenance routines",
      "Handset-based on-vehicle control",
    ],

    how: [
      [
        "Connect the VCI",
        "The VCI links to the car's diagnostic port and pairs with the Handset.",
      ],
      [
        "Read vehicle data",
        "Fault codes, sensor values and system status are retrieved from the car.",
      ],
      [
        "Calibrate and adjust",
        "The technician runs calibrations and parameter adjustments from the Handset.",
      ],
      [
        "Guide maintenance",
        "The tool presents the recommended service steps and confirms the results.",
      ],
    ],

    useCase:
      "A technician connects the VCI to a car, uses the Handset to read active fault codes, runs the required calibration and follows the guided maintenance sequence until the issue is resolved.",

    builtFor: [
      "Automotive Service",
      "Diagnostics",
      "Maintenance Workshops",
    ],
  },
};

const projectMedia = {
  car: {
    image: "images/hero-car-assist.png",
    imageAlt: "Agentic AI Car Assist in an automotive workshop",
    demo: "videos/car-demo.mp4",
    platform: "https://bgsw-agentic-ai-car-assist.netlify.app/",
  },
  genxr: {
    image: "images/hero-genxr.png",
    imageAlt: "GEN XR immersive training",
    demo: "",
    platform: "",
  },
  audio: {
    image: "images/poc-audio-ai.png",
    imageAlt: "Audio AI Detection",
    demo: "",
    platform: "",
  },
  charlie: {
    image: "images/poc-charlie.png",
    imageAlt: "TPA Charlie maintenance assistant",
    demo: "",
    platform: "",
  },
  training: {
    image: "images/hero-training.png",
    imageAlt: "Training and Qualification Platform",
    demo: "",
    platform: "",
  },
  nfc: {
    image: "images/poc-warehouse.png",
    imageAlt: "Smart Warehouse Identification",
    demo: "",
    platform: "",
  },
  bci: {
    image: "images/hero-BCI.png",
    imageAlt: "BCI diagnostic interface for Harley-Davidson motorcycles",
    demo: "",
    platform: "",
  },
  vci: {
    image: "images/hero-VCI.png",
    imageAlt: "VCI Vehicle Communication Interface with Handset",
    demo: "",
    platform: "",
  },
};

const brochure = document.getElementById("brochure");
const closeBtn = document.getElementById("close-brochure");
const demoButton = document.getElementById("open-demo");
const platformButton = document.getElementById("open-platform");
const brochureImage = document.getElementById("brochure-image");
const videoModal = document.getElementById("video-modal");
const closeVideoButton = document.getElementById("close-video");
const demoVideo = document.getElementById("demo-video");
const videoPlaceholder = document.getElementById("video-placeholder");
const videoTitle = document.getElementById("video-title");

const stepIcons = [
  "images/icon-step-sources-ca.png",
  "images/icon-step-know-ca.png",
  "images/icon-step-ask-ca.png",
  "images/icon-step-guidance-ca.png",
];
const capabilityIcons = [
  "images/icon-keycap-nat-ca.png",
  "images/icon-keycap-know-ca.png",
  "images/icon-keycap-videos-ca.png",
  "images/icon-keycap-steps-ca.png",
];
const audienceIcons = [
  "images/icon-up-automotive-ca.png",
  "images/icon-up-technical-ca.png",
  "images/icon-up-service-ca.png",
];

/* Per-project icon sets. Sections without a project-specific set
   fall back to the AI Car Assist icons. */
const iconSets = {
  car: {
    value: [
      "images/icon-br-ask-ca.png",
      "images/icon-br-know-ca.png",
      "images/icon-br-guided-ca.png",
    ],
    capability: capabilityIcons,
    step: stepIcons,
    audience: audienceIcons,
    exampleMain: "images/icon-example-ca.png",
    outcome: [
      "images/icon-example-fast-ca.png",
      "images/icon-example-consistent-ca.png",
      "images/icon-example-time-ca.png",
    ],
  },
  genxr: {
    value: [
      "images/icon-br-vr-genxr.png",
      "images/icon-br-guided-genxr.png",
      "images/icon-br-safe-genxr.png",
    ],
    capability: [
      "images/icon-keycap-inmersive-genxr.png",
      "images/icon-keycap-interactive-genxr.png",
      "images/icon-keycap-perf-genxr.png",
      "images/icon-keycap-steps-genxr.png",
    ],
    // No dedicated GEN XR step icons — reuse the line-art ones (tinted purple by CSS).
    step: stepIcons,
    audience: [
      "images/icon-up-industrial-genxr.png",
      "images/icon-up-plant-genxr.png",
      "images/icon-up-educational-genxr.png"
    ],
    exampleMain: "images/icon-example-genxr.png",
    outcome: [
      "images/icon-example-fast-genxr.png",
      "images/icon-example-measure-genxr.png",
      "images/icon-example-safe-genxr.png",
    ],
  },
  training: {
    value: [
      "images/icon-br-learn-train.png",
      "images/icon-br-objective-train.png",
      "images/icon-br-quali-train.png",
    ],
    capability: [
      "images/icon-keycap-learn-train.png",
      "images/icon-keycap-theory-train.png",
      "images/icon-keycap-vr-train.png",
      "images/icon-keycap-skills-train.png",
    ],
    step: [
      "images/icon-step-path-train.png",
      "images/icon-step-learn-train.png",
      "images/icon-step-practice-train.png",
      "images/icon-step-qualify-train.png",
    ],
    audience: [
      "images/icon-up-workforce-train.png",
      "images/icon-up-plant-train.png",
      "images/icon-up-skills-train.png",
    ],
    exampleMain: "images/icon-example-train.png",
    outcome: [
      "images/icon-example-consis-train.png",
      "images/icon-example-visible-train.png",
      "images/icon-example-skills-train.png",
    ],
  },
};

function iconsFor(key) {
  return iconSets[key] || iconSets.car;
}
let currentProjectKey = null;

function openProject(key) {
  const project = projects[key];
  const media = projectMedia[key];

  if (!project || !media) return;

  currentProjectKey = key;

  brochure.classList.toggle("theme-purple", key === "genxr");
  brochure.classList.toggle("theme-pink", key === "car");
  brochure.classList.toggle("theme-green", key === "training");

  const icons = iconsFor(key);

  document.getElementById("brochure-kicker").textContent = project.kicker;
  document.getElementById("brochure-title").textContent = project.title;
  document.getElementById("brochure-summary").textContent = project.summary;

  brochureImage.src = media.image;
  brochureImage.alt = media.imageAlt;

  document
    .querySelectorAll(".value-row .value-icon img")
    .forEach((img, index) => {
      if (icons.value[index]) img.src = icons.value[index];
    });

  const valueText = project.value || projects.car.value || [];
  document
    .querySelectorAll(".value-row .value-card")
    .forEach((card, index) => {
      const copy = valueText[index];
      if (!copy) return;
      const heading = card.querySelector("h4");
      const paragraph = card.querySelector("p");
      if (heading) heading.textContent = copy[0];
      if (paragraph) paragraph.textContent = copy[1];
    });

  const exampleIcon = document.querySelector(".example-icon img");
  if (exampleIcon) exampleIcon.src = icons.exampleMain;

  const outcomeText = project.outcomes || projects.car.outcomes || [];
  document.querySelectorAll(".outcome-tags span").forEach((span, index) => {
    if (icons.outcome[index]) {
      span.innerHTML = `<img src="${icons.outcome[index]}" alt=""> ${
        outcomeText[index] || ""
      }`;
    }
  });

  const builtFor = document.getElementById("built-for");
  builtFor.innerHTML = "";
  project.builtFor.slice(0, 3).forEach((item, index) => {
    const tag = document.createElement("span");
    tag.innerHTML = `<img src="${icons.audience[index]}" alt=""> ${item}`;
    builtFor.appendChild(tag);
  });

  const capabilities = document.getElementById("capabilities");
  capabilities.innerHTML = "";
  project.capabilities.slice(0, 4).forEach((item, index) => {
    const capability = document.createElement("div");
    capability.className = "capability-item";
    capability.innerHTML = `
      <span aria-hidden="true"><img src="${icons.capability[index]}" alt=""></span>
      <p>${item}</p>
    `;
    capabilities.appendChild(capability);
  });

  const flowTitle = document.getElementById("flow-title");
  if (flowTitle)
    flowTitle.textContent = project.flowTitle || "From documentation to answer";

  const steps = document.getElementById("how-steps");
  steps.innerHTML = "";
  project.how.slice(0, 4).forEach((item, index) => {
    const step = document.createElement("div");
    step.className = "visual-step";
    step.innerHTML = `
      <span class="visual-step-number">${index + 1}</span>
      <span class="visual-step-icon" aria-hidden="true"><img src="${
        icons.step[index]
      }" alt=""></span>
      <strong>${item[0]}</strong>
    `;
    steps.appendChild(step);
  });

  const example = project.example;
  const exampleLabels = example?.labels || ["Problem", "Response", "Outcome"];
  document.querySelectorAll(".example-card dt").forEach((dt, index) => {
    if (exampleLabels[index]) dt.textContent = exampleLabels[index];
  });

  document.getElementById("example-problem").textContent =
    example?.values?.[0] ??
    (key === "car" ? "The Check Engine Light is ON." : project.how[0][1]);
  document.getElementById("example-response").textContent =
    example?.values?.[1] ?? project.useCase;
  document.getElementById("example-outcome").textContent =
    example?.values?.[2] ??
    "The user reaches the recommended next action with clear, consistent guidance.";

  brochure.classList.add("open");
  brochure.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeProject() {
  brochure.classList.remove("open");
  brochure.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function openDemo() {
  const media = projectMedia[currentProjectKey];
  const project = projects[currentProjectKey];

  videoTitle.textContent = project ? `${project.title} demo` : "Project demo";
  videoModal.classList.add("open");
  videoModal.setAttribute("aria-hidden", "false");

  if (media?.demo) {
    demoVideo.src = media.demo;
    demoVideo.classList.add("ready");
    videoPlaceholder.hidden = true;
    demoVideo.play().catch(() => {});
  } else {
    demoVideo.classList.remove("ready");
    videoPlaceholder.hidden = false;
  }
}

function closeVideo() {
  demoVideo.pause();
  demoVideo.removeAttribute("src");
  demoVideo.load();
  demoVideo.classList.remove("ready");
  videoPlaceholder.hidden = false;
  videoModal.classList.remove("open");
  videoModal.setAttribute("aria-hidden", "true");
}

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", () => openProject(card.dataset.project));
});

closeBtn.addEventListener("click", closeProject);
demoButton.addEventListener("click", openDemo);
closeVideoButton.addEventListener("click", closeVideo);

platformButton.addEventListener("click", () => {
  const url = projectMedia[currentProjectKey]?.platform;

  if (url) {
    window.open(url, "_blank", "noopener,noreferrer");
  } else {
    window.alert("The platform URL for this PoC has not been connected yet.");
  }
});

brochure.addEventListener("click", (event) => {
  if (event.target === brochure) closeProject();
});

videoModal.addEventListener("click", (event) => {
  if (event.target === videoModal) closeVideo();
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (videoModal.classList.contains("open")) closeVideo();
  else if (brochure.classList.contains("open")) closeProject();
});
