<h1 align="center">🚀 ViTAKSH | Space Systems Website</h1>

<p align="center">
  <strong>Interactive 3D Portfolio and WebGL Showcase</strong><br>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=threedotjs&logoColor=white" alt="Three.js" />
</p>

---

## 🌌 Overview

This repository contains the front-end codebase for the ViTAKSH aerospace portfolio website. The project is designed with a deep-space aesthetic, utilizing modern CSS properties (glassmorphism) and an interactive **3D WebGL background** powered by Three.js. 

### ✨ Technical Features
* **Interactive WebGL Background:** Renders a `.glb` 3D model directly in the browser. The model features custom metallic materials, multi-point lighting (ambient, directional, and rim lights), and is tied to the window's scroll event for dynamic rotation and translation.
* **Asynchronous Asset Loading:** Utilizes `GLTFLoader` with a custom CSS loading screen that fades out only after the 3D telemetry and geometries are fully parsed and painted.
* **Modern CSS Architecture:** 
  * Utilizes CSS variables (Custom Properties) for a consistent dark-mode theme.
  * Extensively uses `backdrop-filter: blur()` for translucent, overlapping UI elements.
  * Fully responsive grid layouts using `display: grid` and `grid-template-columns: repeat(auto-fit)`.
* **Custom Drawer Navigation:** A JavaScript-toggled, right-aligned sidebar menu with a custom animated hamburger icon state.

---

## 📁 File Structure

```text
ViTAKSH-Website/
│
├── index.html           # Main Entry (Hero section, 3D Canvas wrapper)
├── mission.html         # Static sub-page (Mission objectives)
├── team.html            # Static sub-page (Grid layout for cards)
├── contact.html         # Static sub-page (Contact and footer info)
│
├── style.css            # Global stylesheet (Variables, Layout, UI Components)
├── script.js            # Global JS (Drawer toggle logic & Three.js rendering loop)
│
└── Hubble-1.glb         # 3D GLTF/GLB Binary model for the background
```
## 🛠️ Prerequisites & Installation

⚠️ **IMPORTANT:** Because this project uses `GLTFLoader` to fetch an external 3D model (`Hubble-1.glb`), running the HTML files directly from your local file system (`file:///C:/...`) will result in a **CORS (Cross-Origin Resource Sharing) error**, and the 3D model will fail to load.

**You must run this project on a local HTTP server.**

### Option 1: VS Code Live Server (Recommended)
1. Download and install [Visual Studio Code](https://code.visualstudio.com/).
2. Install the [Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).
3. Clone or download this repository.
4. Ensure `Hubble-1.glb` is located in the root directory alongside `index.html`.
5. Open the project folder in VS Code.
6. Right-click `index.html` and select **"Open with Live Server"**.
7. The website will launch automatically (usually at `http://127.0.0.1:5500`).

### Option 2: Python Simple HTTP Server
If you have Python installed on your machine, you can serve the directory via the command line.

1. Open your terminal/command prompt.
2. Navigate to the project directory: `cd path/to/ViTAKSH-Website`
3. Run the following command:

```bash
# If you are using Python 3
python -m http.server 8000
