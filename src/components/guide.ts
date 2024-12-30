import profile from "/profile-pic.jpg";

const guide = () => {
  const guideSection = document.createElement("section")
  guideSection.id = "guide"

  guideSection.innerHTML = `
    <div class="guide-card">
      <img src="${profile}" alt="Bew Profile P"/>
      <div>
        <h2>Your Guide</h2>
        <p>I have lived at Phathum thani for over 30 years, so I can show you all of its best parts and hidden secrets.</p>
        <p>Bew Jetsadakon</p>
      </div>
    </div>
  `

  return guideSection
}

export default guide();