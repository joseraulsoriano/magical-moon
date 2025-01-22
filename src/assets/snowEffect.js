// Este archivo JS generará el efecto de nieve
const createSnow = () => {
    const snowflakes = [];
    const numFlakes = 50; // Número de copos de nieve
  
    // Crear los copos de nieve
    for (let i = 0; i < numFlakes; i++) {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
      snowflake.style.position = 'absolute';
      snowflake.style.top = Math.random() * 100 + 'vh';
      snowflake.style.left = Math.random() * 100 + 'vw';
      snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
      snowflake.style.animationDelay = Math.random() * 5 + 's';
      document.getElementById('snow').appendChild(snowflake);
      snowflakes.push(snowflake);
    }
  
    // Agregar la animación de caída
    const css = `
      @keyframes fall {
        0% { transform: translateY(0); }
        100% { transform: translateY(100vh); }
      }
      .snowflake {
        width: 5px;
        height: 5px;
        background-color: #fff;
        border-radius: 50%;
        opacity: 0.7;
        animation: fall linear infinite;
      }
    `;
    const style = document.createElement('style');
    style.innerHTML = css;
    document.head.appendChild(style);
  };
  
  createSnow(); // Llamar la función para crear la nieve