import { NextRequest, NextResponse } from 'next/server'
import { readFileSync } from 'fs'
import { join } from 'path'

export async function GET(request: NextRequest) {
  try {
    // Ler o arquivo do componente Header dinamicamente
    const headerComponentPath = join(process.cwd(), 'src/components/Header.tsx')
    const headerContent = readFileSync(headerComponentPath, 'utf8')
    
    // Extrair o título do componente
    const titleMatch = headerContent.match(/<Typography[^>]*>\s*([^<]+)\s*<\/Typography>/)
    const title = titleMatch && titleMatch[1] ? titleMatch[1].trim() : "🚀 Header MF - Título Dinâmico"
    
    // Gerar dados dinâmicos baseados no componente
    const headerData = {
      title: title,
      buttons: ["Home", "Sobre", "Contato"],
      timestamp: new Date().toISOString(),
      version: "dynamic"
    }
    
    // Gerar JavaScript dinâmico que cria o HTML baseado no componente
    const microfrontendJs = `
// Header Microfrontend - Renderizado Dinamicamente do Componente React
(function() {
  'use strict';
  
  if (typeof window !== 'undefined') {
    window.headerMicrofrontend = {
      mount: function(element) {
        console.log('⚡ Header MF: Mount chamado (Dinâmico do React)', element);
        console.log('⚡ Timestamp:', '${headerData.timestamp}');
        
        // Dados do componente React (atualizados dinamicamente)
        const headerData = ${JSON.stringify(headerData)};
        
        // Criar HTML baseado no componente React
        const headerHtml = \`
          <div class="MuiAppBar-root" style="position: static; background-color: #1976d2; color: white; box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);">
            <div class="MuiToolbar-root" style="display: flex; align-items: center; padding: 0 24px; min-height: 64px;">
              <button class="MuiIconButton-root menu-button" style="color: inherit; padding: 12px; border-radius: 50%; background: transparent; border: none; cursor: pointer; margin-right: 16px;">
                <svg viewBox="0 0 24 24" style="fill: currentColor; width: 1.5em; height: 1.5em; display: inline-block;">
                  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                </svg>
              </button>
              <div class="MuiTypography-h6" style="font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif; font-weight: 400; font-size: 1.25rem; line-height: 1.6; letter-spacing: 0.0075em; flex-grow: 1; margin: 0;">
                \${headerData.title}
              </div>
              <div class="MuiBox-root" style="display: flex; align-items: center; gap: 16px;">
                \${headerData.buttons.map(button => \`
                  <button class="MuiButton-root nav-button" style="color: inherit; background: transparent; border: none; padding: 6px 16px; cursor: pointer; text-transform: uppercase; font-weight: 500; border-radius: 4px;">\${button}</button>
                \`).join('')}
                <button class="MuiIconButton-root account-button" style="color: inherit; padding: 12px; border-radius: 50%; background: transparent; border: none; cursor: pointer;">
                  <svg viewBox="0 0 24 24" style="fill: currentColor; width: 1.5em; height: 1.5em; display: inline-block;">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        \`;
        
        element.innerHTML = headerHtml;
        
        // Adicionar event listeners
        const menuButton = element.querySelector('.menu-button');
        const navButtons = element.querySelectorAll('.nav-button');
        const accountButton = element.querySelector('.account-button');
        
        if (menuButton) {
          menuButton.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('⚡ Menu button clicked - Dinâmico do React');
          });
        }
        
        navButtons.forEach(button => {
          button.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('⚡ Nav button clicked:', e.target.textContent, '- Dinâmico do React');
          });
        });
        
        if (accountButton) {
          accountButton.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('⚡ Account button clicked - Dinâmico do React');
          });
        }
        
        // Adicionar hover effects
        const buttons = element.querySelectorAll('button');
        buttons.forEach(button => {
          button.addEventListener('mouseenter', () => {
            button.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
          });
          button.addEventListener('mouseleave', () => {
            button.style.backgroundColor = 'transparent';
          });
        });
        
        // Adicionar estilo para visual indicator
        const indicator = document.createElement('div');
        indicator.innerHTML = '⚡ Dinâmico';
        indicator.style.cssText = \`
          position: absolute;
          top: 8px;
          right: 8px;
          background: #4caf50;
          color: white;
          padding: 2px 6px;
          border-radius: 3px;
          font-size: 10px;
          font-weight: bold;
          z-index: 1200;
        \`;
        element.style.position = 'relative';
        element.appendChild(indicator);
        
        // Adicionar timestamp info
        const timestampInfo = document.createElement('div');
        timestampInfo.innerHTML = \`Atualizado: \${new Date(headerData.timestamp).toLocaleTimeString()}\`;
        timestampInfo.style.cssText = \`
          position: absolute;
          bottom: 8px;
          right: 8px;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 2px 6px;
          border-radius: 3px;
          font-size: 8px;
          z-index: 1200;
        \`;
        element.appendChild(timestampInfo);
      },
      
      unmount: function(element) {
        console.log('⚡ Header MF: Unmount chamado (Dinâmico do React)', element);
        if (element) {
          element.innerHTML = '';
        }
      }
    };
    
    // Sinalizar que foi carregado dinamicamente
    console.log('⚡ Header MF carregado dinamicamente do componente React!');
    console.log('⚡ Título atual:', '${title}');
    console.log('⚡ Timestamp:', '${headerData.timestamp}');
  }
})();
`;

    return new NextResponse(microfrontendJs, {
      headers: {
        'Content-Type': 'application/javascript',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        // Não cachear para sempre ter a versão mais recente
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    })
  } catch (error) {
    console.error('Erro ao gerar Header MF dinâmico:', error)
    return new NextResponse('Erro interno do servidor', { status: 500 })
  }
} 