function loadNavbar() {
  const navbarHTML = `
    <nav class="sticky top-0 z-50 bg-neutral-bg shadow-sm border-b border-neutral-border">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex-shrink-0 flex items-center">
            <a href="index.html" class="text-primary font-bold text-2xl tracking-tight">SB YUVA</a>
          </div>

          <!-- Desktop menu -->
          <div class="hidden md:flex items-center space-x-8">
            <a href="index.html" class="text-text-primary hover:text-primary-dark transition-colors font-medium">Home</a>
            <a href="about.html" class="text-text-primary hover:text-primary-dark transition-colors font-medium">About</a>
            <a href="communities.html" class="text-text-primary hover:text-primary-dark transition-colors font-medium">Communities</a>
            <a href="learn.html" class="text-text-primary hover:text-primary-dark transition-colors font-medium">Learn Samskritam</a>
            <a href="yuva-vani.html" class="text-text-primary hover:text-primary-dark transition-colors font-medium">Yuva Vani</a>
            <a href="events.html" class="text-text-primary hover:text-primary-dark transition-colors font-medium">Events</a>
            <a href="contact.html" class="bg-primary text-white hover:bg-primary-dark px-4 py-2 rounded-md font-medium transition-colors">Contact Us</a>
          </div>

          <!-- Mobile menu button -->
          <div class="flex items-center md:hidden">
            <button type="button" id="mobile-menu-btn" class="inline-flex items-center justify-center p-2 rounded-md text-text-primary hover:text-primary hover:bg-neutral-surface focus:outline-none" aria-controls="mobile-menu" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile menu -->
      <div class="md:hidden hidden bg-neutral-surface border-t border-neutral-border" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="index.html" class="block px-3 py-2 rounded-md text-base font-medium text-text-primary hover:text-primary hover:bg-neutral-bg">Home</a>
          <a href="about.html" class="block px-3 py-2 rounded-md text-base font-medium text-text-primary hover:text-primary hover:bg-neutral-bg">About</a>
          <a href="communities.html" class="block px-3 py-2 rounded-md text-base font-medium text-text-primary hover:text-primary hover:bg-neutral-bg">Communities</a>
          <a href="learn.html" class="block px-3 py-2 rounded-md text-base font-medium text-text-primary hover:text-primary hover:bg-neutral-bg">Learn Samskritam</a>
          <a href="yuva-vani.html" class="block px-3 py-2 rounded-md text-base font-medium text-text-primary hover:text-primary hover:bg-neutral-bg">Yuva Vani</a>
          <a href="events.html" class="block px-3 py-2 rounded-md text-base font-medium text-text-primary hover:text-primary hover:bg-neutral-bg">Events</a>
          <a href="contact.html" class="block px-3 py-2 rounded-md text-base font-medium text-primary font-bold hover:bg-neutral-bg mt-2">Contact Us</a>
        </div>
      </div>
    </nav>
  `;

  const placeholder = document.getElementById('navbar-placeholder');
  if (placeholder) {
    placeholder.innerHTML = navbarHTML;

    // Mobile menu toggle logic
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
      btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
      });
    }
  }
}

document.addEventListener('DOMContentLoaded', loadNavbar);
