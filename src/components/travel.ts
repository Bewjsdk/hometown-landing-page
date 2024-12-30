import { image1, image2, image3 } from "../assets"

const travel = () => {
  const travelSection = document.createElement("section")
  travelSection.id = "travel"

  travelSection.innerHTML = `
      <h2>Top 3 Travel Destinations</h2>
      <div class="travel-container">
        <div class="travel-card">
          <img src="${image1}" alt="Dream World Park"/>
          <div class="travel-contents">
            <h3>Dream World Park</h3>
            <p>A great place for families and tourists looking for fun activities.</p>
          </div>
        </div>
        <div class="travel-card">
          <img src="${image2}" alt="Zpell"/>
          <div class="travel-contents">
            <h3>Zpell Shopping Mall</h3>
            <p>A vibrant shopping mall in Phathum thani, offering shopping, dining, and entertainment.</p>
          </div>
        </div>
        <div class="travel-card">
          <img src="${image3}" alt="Temple"/>
          <div class="travel-contents">
            <h3>Wat Panyanantarama</h3>
            <p>A Buddhist temple in Pathum Thani, known for its peaceful atmosphere and meditation practices</p>
          </div>
        </div>
      </div>
  `

  return travelSection;
}

export default travel()