// Microfrontend Header - Exposição para carregamento remoto
(function() {
  'use strict';
  
  // Verificar se o React já está carregado globalmente
  if (typeof window !== 'undefined') {
    // Configurar microfrontend para ser carregado remotamente
    window.headerMicrofrontend = {
      mount: function(element) {
        // Este será implementado quando integrarmos adequadamente
        console.log('Header MF: Mount chamado', element);
        
        // Por enquanto, criar um header simples
        element.innerHTML = `
          <div style="background-color: #1976d2; color: white; padding: 16px;">
            <div style="display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto;">
              <h1 style="margin: 0; font-size: 1.5rem;">Micro-Frontend App (Remoto)</h1>
              <nav style="display: flex; gap: 16px;">
                <a href="#" style="color: white; text-decoration: none;">Home</a>
                <a href="#" style="color: white; text-decoration: none;">Sobre</a>
                <a href="#" style="color: white; text-decoration: none;">Contato</a>
              </nav>
            </div>
          </div>
        `;
      },
      
      unmount: function(element) {
        console.log('Header MF: Unmount chamado', element);
        if (element) {
          element.innerHTML = '';
        }
      }
    };
  }
})(); 