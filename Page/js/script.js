const projects = {
  /* =====================================
     AGENTIC AI CAR ASSIST
  ===================================== */

  car: {
    kicker: "Knowledge & Product Support",

    title: "Agentic AI Car Assist",

    summary:
      "AI-powered knowledge assistant trained with manuals, videos and technical documentation. Users can ask questions in natural language and receive fast, contextual answers from structured product knowledge.",

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

    what: "Creates safe, repeatable and immersive training environments where users can learn processes through direct interaction. Real equipment, plant areas or procedures can be represented virtually so employees can practice before performing the task in the physical environment.",

    capabilities: [
      "Interactive 3D process visualization",
      "Immersive VR training environments",
      "Guided step-by-step procedures",
      "Realistic equipment interaction",
      "Difficulty levels and repeatable scenarios",
      "Training performance tracking",
    ],

    how: [
      [
        "Model the environment",
        "Equipment, workstations and process elements are recreated in a 3D environment.",
      ],
      [
        "Define the training flow",
        "Steps, interactions, rules and expected actions are configured.",
      ],
      [
        "Train in VR",
        "The user practices the task in an immersive and controlled environment.",
      ],
      [
        "Evaluate performance",
        "Completion time, errors and user performance can be reviewed after the simulation.",
      ],
    ],

    useCase:
      "A new plant operator practices assembling or configuring a system in VR before accessing the real workstation. The simulation guides the user through the process, detects incorrect steps and allows repetition without affecting production.",

    builtFor: [
      "Manufacturing",
      "Plant Training",
      "Maintenance",
      "Safety Training",
      "Technical Education",
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
    kicker: "Workforce Qualification",

    title: "Training & Qualification Platform",

    summary:
      "Integrated training and evaluation platform for theoretical and practical plant assessments, combining learning support, open and closed questions, practical evaluation and VR-based simulation.",

    what: "Supports the complete qualification cycle of plant personnel: learning, theoretical evaluation, practical assessment and skills visibility. The platform can incorporate Kirkpatrick-style evaluation principles to measure learning effectiveness and provide a broader view of workforce capability.",

    capabilities: [
      "Theoretical exams",
      "Open and closed question formats",
      "Practical evaluations",
      "VR-based practice and simulations",
      "Difficulty levels",
      "Learning progress support",
      "Workforce skill-level visibility",
      "Qualification and performance history",
    ],

    how: [
      [
        "Assign learning content",
        "Users receive the material or process knowledge required for their role.",
      ],
      [
        "Evaluate theory",
        "The platform delivers open and closed questions to assess understanding.",
      ],
      [
        "Evaluate practice",
        "Practical tasks can be assessed physically or through VR simulations.",
      ],
      [
        "Analyze workforce level",
        "Results provide visibility into individual and team qualification levels.",
      ],
    ],

    useCase:
      "A production operator completes the theoretical evaluation for a new process, then enters a VR simulation to perform the practical sequence. The platform records both results and shows whether the operator is ready for qualification or needs additional practice.",

    builtFor: [
      "Manufacturing Plants",
      "Workforce Development",
      "Technical Training",
      "Qualification Programs",
      "VR Training",
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
};

const projectMedia = {
  car: {
    image: "images/hero-car-assist.png",
    imageAlt: "Agentic AI Car Assist in an automotive workshop",
    demo: "videos/car-demo.mp4",
    platform: "https://bgsw-agentic-ai-car-assist.netlify.app/",
  },
  genxr: {
    image: "images/poc-gen-xr.png",
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
    image: "images/poc-training.png",
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
let currentProjectKey = null;

function openProject(key) {
  const project = projects[key];
  const media = projectMedia[key];

  if (!project || !media) return;

  currentProjectKey = key;

  brochure.classList.toggle("theme-purple", key === "genxr");

  document.getElementById("brochure-kicker").textContent = project.kicker;
  document.getElementById("brochure-title").textContent = project.title;
  document.getElementById("brochure-summary").textContent = project.summary;

  brochureImage.src = media.image;
  brochureImage.alt = media.imageAlt;

  const builtFor = document.getElementById("built-for");
  builtFor.innerHTML = "";
  project.builtFor.slice(0, 3).forEach((item, index) => {
    const tag = document.createElement("span");
    tag.innerHTML = `<img src="${audienceIcons[index]}" alt=""> ${item}`;
    builtFor.appendChild(tag);
  });

  const capabilities = document.getElementById("capabilities");
  capabilities.innerHTML = "";
  project.capabilities.slice(0, 4).forEach((item, index) => {
    const capability = document.createElement("div");
    capability.className = "capability-item";
    capability.innerHTML = `
      <span aria-hidden="true"><img src="${capabilityIcons[index]}" alt=""></span>
      <p>${item}</p>
    `;
    capabilities.appendChild(capability);
  });

  const steps = document.getElementById("how-steps");
  steps.innerHTML = "";
  project.how.slice(0, 4).forEach((item, index) => {
    const step = document.createElement("div");
    step.className = "visual-step";
    step.innerHTML = `
      <span class="visual-step-number">${index + 1}</span>
      <span class="visual-step-icon" aria-hidden="true"><img src="${
        stepIcons[index]
      }" alt=""></span>
      <strong>${item[0]}</strong>
    `;
    steps.appendChild(step);
  });

  document.getElementById("example-problem").textContent =
    key === "car" ? "The Check Engine Light is ON." : project.how[0][1];
  document.getElementById("example-response").textContent = project.useCase;
  document.getElementById("example-outcome").textContent =
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
