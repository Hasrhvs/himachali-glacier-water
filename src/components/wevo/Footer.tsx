const Footer = () => {
  return (
    <footer className="bg-wevo-navy py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div>
            <h3 className="font-display text-3xl font-semibold text-wevo-snow mb-4">WEVO</h3>
            <p className="font-body text-sm text-wevo-glacier/60 max-w-xs leading-relaxed">
              Mountain-born luxury water, sustainably sourced from the Himalayas.
            </p>
          </div>

          <div>
            <p className="wevo-label text-wevo-ice mb-6">Explore</p>
            <div className="flex flex-col gap-3">
              {["Origin", "Products", "Minerals", "Why WEVO", "FAQ"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
                  className="font-body text-sm text-wevo-glacier/60 hover:text-wevo-snow transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="wevo-label text-wevo-ice mb-6">Connect</p>
            <div className="flex flex-col gap-3">
              <a href="#" className="font-body text-sm text-wevo-glacier/60 hover:text-wevo-snow transition-colors duration-300">
                Instagram
              </a>
              <a href="#" className="font-body text-sm text-wevo-glacier/60 hover:text-wevo-snow transition-colors duration-300">
                Twitter
              </a>
              <a href="mailto:hello@wevo.in" className="font-body text-sm text-wevo-glacier/60 hover:text-wevo-snow transition-colors duration-300">
                hello@wevo.in
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-wevo-stone/20 mt-12 pt-8">
          <p className="font-body text-xs text-wevo-glacier/40 text-center">
            © 2026 WEVO. All rights reserved. Mountain-born, naturally pure.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
