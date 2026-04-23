/**
 * THE VINTAGE BREW - AR MENU LOGIC
 * Features: Local GLB loading, AR Hotspots for Ordering, and Rupee Pricing.
 */

const cafeMenu = [
  {
    id: 1,
    name: "Classic Coffee",
    price: "₹245",
    // High-quality retro coffee image
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80",
    // Standard Google Coffee Cup model
    modelGlb: "https://modelviewer.dev/shared-assets/models/glTF-Sample-Assets/Models/CoffeeCup/glTF/CoffeeCup.gltf"
  },
  {
    id: 2,
    name: "BigBoss Pancho Pizza",
    price: "₹599",
    // Mouth-watering pizza image
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
    // THIS USES YOUR UPLOADED GITHUB FILE
    modelGlb: "pizza_bigboss_pancho.glb" 
  },
  {
    id: 3,
    name: "Diner Club Sandwich",
    price: "₹345",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80",
    // Placeholder 3D model (Avocado) until you upload a sandwich GLB
    modelGlb: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Avocado/glTF-Binary/Avocado.glb" 
  },
  {
    id: 4,
    name: "The Worker's Combo",
    price: "₹750",
    // Image of coffee and snack together
    image: "https://images.unsplash.com/photo-1619860860774-1e2e17343432?auto=format&fit=crop&w=600&q=80",
    modelGlb: "https://modelviewer.dev/shared-assets/models/glTF-Sample-Assets/Models/CoffeeCup/glTF/CoffeeCup.gltf" 
  }
];

const container = document.getElementById('menu-container');

/**
 * Function to render the menu cards
 */
function renderMenu() {
  cafeMenu.forEach(item => {
    const card = document.createElement('div');
    card.className = 'menu-card';
    
    // model-viewer setup
    // src: the 3D model file
    // poster: the static image shown before 3D loads
    // reveal="interaction": optimization so models only load when tapped
    card.innerHTML = `
      <model-viewer 
        src="${item.modelGlb}" 
        poster="${item.image}" 
        ar 
        ar-modes="webxr scene-viewer quick-look" 
        camera-controls 
        shadow-intensity="1"
        reveal="interaction"
        alt="A 3D model of ${item.name}">
        
        <button slot="hotspot-order" 
                class="hotspot-order" 
                data-position="0 0.15 0.1" 
                data-normal="0 0 1"
                onclick="confirmOrder('${item.name}', '${item.price}')">
          🛒 ORDER AT ${item.price}
        </button>

        <button slot="ar-button" class="ar-btn">
          ★ VIEW ON TABLE ★
        </button>
      </model-viewer>
      
      <h3>${item.name}</h3>
      <div class="price-tag">${item.price}</div>
    `;
    
    container.appendChild(card);
  });
}

/**
 * Handle the Order button click inside AR
 */
function confirmOrder(name, price) {
  // This alert appears over the AR camera view
  alert(`🛎️ Order Sent!\n\nItem: ${name}\nTotal: ${price}\n\nOur chef is preparing your dish!`);
}

// Initialize the menu
document.addEventListener('DOMContentLoaded', renderMenu);
