const hero = () => {
  const heroSection = document.createElement("section");
  heroSection.id = "hero";

  heroSection.innerHTML = `
    <h1>Welcome to Phathum thani</h1>
    <p>Located north of Bangkok, blends urban development, education, industry, and natural attractions like temples and parks.</p>
  `

  return heroSection;
}

export default hero();