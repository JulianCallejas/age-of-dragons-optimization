<h1 align="center" > Age of Dragons - Skill Tree Optimization Project </h1>

<p align="center">
    <a href="https://juliancallejas.github.io/age-of-dragons-optimization/">
      <img src="https://juliancallejas.github.io/age-of-dragons-optimization/img/logo200.webp" width="200" alt="Age of Dragons Logo" />
    </a>
</p>

Dragon Skill Tree is a React-based project focused on optimizing re-renders in a skill tree visualization. The project uses **React Flow** and **Redux Toolkit** to manage and display a dynamic skill tree while ensuring that only updated nodes re-render, improving performance.

## Project Structure

This repository contains two branches:

- **`before-optimization`**: The initial version, where all nodes re-render when a single node updates.
  [See deploy preview](https://XXXX).
- **`after-optimization`**: The optimized version, where only the updated node re-renders, reducing unnecessary renders. [See deploy preview](https://XXXX).

## Installation & Setup

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [Git](https://git-scm.com/)

### Steps to Run the Project

1. **Clone the Repository**

   ```sh
   git clone https://github.com/yourusername/dragon-skill-tree.git
   cd dragon-skill-tree
   ```

2. **Switch to the desired branch**

   - To check the initial (unoptimized) version:
     ```sh
     git checkout before-optimization
     ```
   - To check the optimized version:
     ```sh
     git checkout after-optimization
     ```

3. **Install Dependencies**

   ```sh
   npm install
   ```

4. **Edit the environment variables**

   - Create the `.env` file in the root of the project
   - Include the data url. See the `.env.template` file for an example.

5. **Run the Project**
   ```sh
   npm start
   ```
   The app should now be running at `http://localhost:3000/`.

## Key Optimizations Implemented

- **Selective State Selection**: Using `useAppSelector` to fetch only necessary parts of the state.
- **React.memo**: Prevents unnecessary re-renders of unchanged components.
- **State Management Improvements**: Ensuring that component dependencies are minimal and focused.

## Contributing

Feel free to contribute by submitting pull requests or reporting issues!

## License

This project is licensed under the MIT License.

🌟 You’re the superstar of our show! Thanks for lighting up our repository with your presence. We hope you enjoy exploring our code as much as we enjoyed writing it. 🖥️

<p align="center">
<a href="https://github.com/JulianCallejas">
  <img src="https://res.cloudinary.com/dphleqb5t/image/upload/v1740784502/github-jc-develop/JC-LOGO-Horizontal-170-50-thin-github_uu3b5n.svg" width="170" alt="{ jc - develop }"  /> 
</a>
</p>
