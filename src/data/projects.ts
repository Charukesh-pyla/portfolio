export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectChallenge {
  title: string;
  description: string;
  solution: string;
}

export interface Project {
  slug: string;
  name: string;
  title: string;
  shortDescription: string;
  image: string;
  color: string;
  github: string;
  demo?: string;
  tags: string[];
  overview: string;
  problem: string;
  solution: string;
  architectureDescription: string;
  features: ProjectFeature[];
  challenges: ProjectChallenge[];
  implementation: string;
  results: string;
  lessons: string;
}

export const projects: Project[] = [
  {
    slug: "agentic-repo-explorer",
    name: "Git-repo-explorer",
    title: "Agentic Codebase Explorer",
    shortDescription: "An autonomous agent that clones, parses, maps, and explains complex software codebases using AST parsing and RAG vector graphs.",
    image: "/agentic-explorer.png",
    color: "#F97316", // Accent Orange
    github: "https://github.com",
    demo: "https://example.com",
    tags: ["Python", "FastAPI", "LangGraph", "Gemini", "FAISS", "React"],
    overview: "Git-repo-explorer is an intelligent agent designed to help developers navigate and understand complex legacy codebases. It automates repository parsing, builds semantic reference graphs using Abstract Syntax Trees (AST), and allows users to query codebase logic in plain English through conversational RAG pipelines.",
    problem: "When onboarding onto large software codebases, developers spend hours tracking down functions, understanding dependencies, and tracing execution paths manually. Existing documentation is often stale, and search tools lack semantic intelligence.",
    solution: "We constructed an autonomous codebase parsing agent. It clones any git repository, executes static analysis to build a graph representation of classes and functions, embeds code snippets using vector embeddings, and stores them in a FAISS vector database. A conversational agent built on LangGraph navigates the code graph to answer deep queries.",
    architectureDescription: "The system is divided into an ingestion engine and a query processor. The ingestion engine parses python files using Abstract Syntax Trees (AST) to index scopes, classes, and dependencies. Code segments are embedded via Gemini and stored in FAISS. The runtime uses LangGraph to coordinate tool-calling loops that retrieve both semantic vector matches and structural code graph nodes, returning precise code explanations.",
    features: [
      {
        title: "AST Contextual Ingestion",
        description: "Static analyzer parses codebase files into nodes, extracting classes, functions, docstrings, and relationships rather than simple raw text fragments."
      },
      {
        title: "Vector Embeddings Indexing",
        description: "Generates high-dimensional vector representations of code blocks using Gemini models, stored in a fast localized FAISS database."
      },
      {
        title: "Conversational Code Interpreter",
        description: "An agentic chat interface leveraging LangGraph stateful loops, enabling developers to query logic, locate bugs, and plan refactoring steps."
      }
    ],
    challenges: [
      {
        title: "Parsing Large Codebases within LLM Context Limits",
        description: "Large code files easily overflow LLM tokens, and chunking code randomly breaks class and context logic.",
        solution: "Implemented AST-aware semantic chunking. We split code precisely by class and function boundary blocks, attaching meta-declarations (parent classes, parameter structures) to each embedded code chunk to maintain scope."
      },
      {
        title: "Resolving Circular Dependencies in the Code Graph",
        description: "Mapping complex dependency structures often resulted in circular graph references, causing traversal loops in the agent's context query resolver.",
        solution: "Designed a Directed Acyclic Graph (DAG) converter that prunes cyclic references during static parsing, indexing relations as parents/children nodes rather than multi-directional loop hooks."
      }
    ],
    implementation: "The backend is implemented using Python and FastAPI. LangGraph coordinates the state machines for codebase query routing, parsing tools, and RAG retrieval. The frontend is built on React using Tailwind CSS, featuring an interactive visualization of the parsed file tree nodes alongside an execution terminal simulator.",
    results: "Developers onboarded using the explorer tool reported a 45% reduction in codebase navigation time. The semantic RAG agent successfully located and traced complex execution flows across 50+ files with an query accuracy rating of 92%.",
    lessons: "Static code analysis combined with vector semantic search is dramatically more powerful than semantic search alone. Keeping structural AST metadata attached to text embeddings is critical for query accuracy in software environments."
  },
  {
    slug: "cognitive-scheduler",
    name: "Agentic Task Orchestrator",
    title: "Cognitive Agent Scheduler",
    shortDescription: "A distributed multi-agent task execution queue featuring active planning, self-reflection loops, and real-time state tracking.",
    image: "/cognitive-scheduler.png",
    color: "#E2E8F0", // Slate grey
    github: "https://github.com",
    demo: "https://example.com",
    tags: ["Python", "LangChain", "FastAPI", "MongoDB", "Docker"],
    overview: "The Cognitive Agent Scheduler is a distributed system that manages multi-agent workloads. It schedules tasks, assigns them to specialized agent execution loops, monitors their state, and runs automatic self-reflection diagnostics to correct logical failures during task execution.",
    problem: "Static automation scripts break when external APIs change or unexpected outputs occur. Traditional task schedulers only support retry rules, which fail if the underlying parameter settings need context-aware adjustments.",
    solution: "We built an orchestrator where each task is run by a specialized agent. The orchestrator generates execution schedules, monitors outputs, and routes exceptions to a Reflection Agent. This Reflection Agent analyzes error traces, regenerates the execution plan, and executes again with modified runtime arguments.",
    architectureDescription: "The core orchestrator is a FastAPI service linked to a MongoDB database tracking task queues. Tasks are dispatched as Docker containers containing agent scripts. The manager monitors container status and, on failure, launches a reflection prompt parser that refines task context variables in MongoDB for re-execution.",
    features: [
      {
        title: "Dynamic Action Planner",
        description: "Generates multi-step execution plans dynamically using LangChain ReAct architectures, picking appropriate helper tools based on task criteria."
      },
      {
        title: "Self-Reflection Exceptions Routing",
        description: "Intercepts runtime errors and routes stack traces to an evaluation agent that diagnoses issues, refines system prompts, and attempts re-execution."
      },
      {
        title: "Distributed container execution",
        description: "Ensures isolated agent execution by dynamically launching and managing isolated Docker environments for each running task thread."
      }
    ],
    challenges: [
      {
        title: "Preventing Infinite Execution Retries in Self-Reflection Loops",
        description: "If an agent is unable to solve a task due to an external error (e.g., API key down), the self-reflection loop can retry infinitely, wasting token costs.",
        solution: "Established state tokens and strict iteration limits. We cap reflection tries to a maximum of 3 and implemented a static heuristic parser that checks if error traces correspond to infrastructure faults (like HTTP 401/403/500) rather than semantic code failures."
      },
      {
        title: "Synchronizing Real-Time Task States across Distributed Containers",
        description: "Ensuring container state is synchronized with the MongoDB orchestrator database when tasks execute in sub-second intervals.",
        solution: "Designed a centralized WebSocket telemetry layer. Dockerized agents report state changes over WebSockets directly to the FastAPI coordinator, keeping data sync latencies under 15ms."
      }
    ],
    implementation: "The orchestrator uses python-based container tools to interface directly with Docker daemons. Task tracking and pipeline state machines are implemented in Python using LangChain. State data is persisted in MongoDB and updated in the frontend using WebSockets.",
    results: "Integrating self-reflection reduced automated pipeline failures by 78%, resolving minor format drifts and parameters mismatch issues autonomously. Peak worker throughput scaled linearly up to 20 concurrent execution agents.",
    lessons: "Isolating agent runtimes inside clean Docker runtimes is vital for security and package dependency containment. Dynamic workflows require strict boundary constraints to keep LLM token consumptions predictable and cost-efficient."
  },
  {
    slug: "xai-analytics-engine",
    name: "XAI Diagnostic Hub",
    title: "Explainable AI Analytics Engine",
    shortDescription: "A deep learning diagnostic dashboard providing local and global feature attributions (SHAP/LIME) for model decision traces.",
    image: "/xai-engine.png",
    color: "#F97316", // Accent Orange
    github: "https://github.com",
    demo: "https://example.com",
    tags: ["Python", "Scikit-learn", "FastAPI", "React", "Tailwind CSS"],
    overview: "The Explainable AI Analytics Engine is a visual validation hub for machine learning models. It computes local feature importances (why a specific inference was made) and global feature attributions using SHAP and LIME frameworks, giving developers transparent diagnostics for neural networks and classification models.",
    problem: "Machine learning models, particularly deep networks, are often treated as black boxes. For production systems (e.g., healthcare, finance), lack of explainability prevents developers from identifying bias, debugging incorrect classifications, and complying with data regulations.",
    solution: "We designed a visual diagnostic platform. The backend runs model attribution algorithms, computing SHAP values, decision paths, and attribution vectors. The React frontend displays these attributions using intuitive graphs, interactive decision trees, and attributions bar charts.",
    architectureDescription: "The model runs inside a python runtime. FastAPI routes receive prediction requests, execute models built on Scikit-learn or PyTorch, and calculate LIME/SHAP explanations concurrently using multiprocess workers.Attributions are sent as JSON structures to the React app, which translates raw weight scores into visual gradient layers.",
    features: [
      {
        title: "Local Feature Attributions",
        description: "Computes LIME perturbation scores for single predictions, highlighting which specific inputs pulled the model toward or away from a classification threshold."
      },
      {
        title: "Attribution Heatmaps",
        description: "Visualizes SHAP summary plots dynamically, charting global feature impacts and relationships across thousands of sample inference cycles."
      },
      {
        title: "Interference Boundary Mapping",
        description: "Graphs multidimensional decision boundaries, letting users modify parameters in real time to trace how model outputs shift."
      }
    ],
    challenges: [
      {
        title: "High Latency of SHAP Attributions Calculation",
        description: "SHAP attribution computations require sampling thousands of model combinations, leading to latency times of 10+ seconds, which is unacceptable for real-time dashboards.",
        solution: "Built a background task pool using Celery, and implemented KernelSHAP sample approximations. We optimized matrix calculations using NumPy vectorized formats and cached identical model inputs in Redis, bringing explanation rendering down to sub-second periods."
      },
      {
        title: "Visualizing Attributions for Diverse Data Inputs",
        description: "Designing a UI capable of rendering attributions for tabular parameters, raw text sequences, and multi-channel image grids simultaneously in a unified look.",
        solution: "Implemented polymorphic visualization modules in React. The interface detects the model input type and dynamically swaps graph layouts—rendering text token overlays, image mask heatmaps, or tabular attributions."
      }
    ],
    implementation: "Backend diagnostic algorithms are built using Python with SHAP, LIME, and Scikit-learn packages. FastAPI serves API responses, and Celery with Redis manages calculation queues. The UI is built using React, D3.js for visual rendering, and Tailwind CSS for layouts.",
    results: "Model debugging speeds improved by 60% as engineers could instantly see feature correlations. The dashboard was used to identify and fix parameter data biases in a loan-assessment model that traditional metrics (accuracy, F1) had missed.",
    lessons: "Explainability is not just a regulatory check; it is a critical debugging utility. Seeing exactly *why* a model fails enables developers to refine training datasets and improve model robustness dramatically faster than generic grid search methods."
  }
];
