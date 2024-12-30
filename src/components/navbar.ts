const navbar = () => {
  const nav = document.createElement("nav")
  nav.classList.add("navbar")

  nav.innerHTML = `  
      <ul>
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#travel">Tourist attraction</a>
        </li>
        <li>
          <a href="#guide">Guide</a>
        </li>
      </ul>
  `

  return nav;
};

export default navbar();