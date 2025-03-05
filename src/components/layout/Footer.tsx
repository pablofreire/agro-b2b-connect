
import React from "react";
import { Link } from "react-router-dom";
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container mx-auto pt-16 pb-8 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <span className="bg-agro-500 text-white p-2 rounded-md">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17.9999L3 13.9999M3 13.9999L7 9.99994M3 13.9999H16M16 5.99994H19C20.1046 5.99994 21 6.89537 21 7.99994V17.9999C21 19.1045 20.1046 19.9999 19 19.9999H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="font-semibold text-xl tracking-tight">AgroB2B</span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              Conectando o agronegócio de forma eficiente e transparente.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-agro-500 transition-colors">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-agro-500 transition-colors">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-agro-500 transition-colors">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-agro-500 transition-colors">
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
              Empresa
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-agro-600 dark:hover:text-agro-400 transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 dark:text-gray-400 hover:text-agro-600 dark:hover:text-agro-400 transition-colors">
                  Carreiras
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 dark:text-gray-400 hover:text-agro-600 dark:hover:text-agro-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-agro-600 dark:hover:text-agro-400 transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
              Suporte
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/help" className="text-gray-600 dark:text-gray-400 hover:text-agro-600 dark:hover:text-agro-400 transition-colors">
                  Central de Ajuda
                </Link>
              </li>
              <li>
                <Link to="/documentation" className="text-gray-600 dark:text-gray-400 hover:text-agro-600 dark:hover:text-agro-400 transition-colors">
                  Documentação
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 dark:text-gray-400 hover:text-agro-600 dark:hover:text-agro-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/status" className="text-gray-600 dark:text-gray-400 hover:text-agro-600 dark:hover:text-agro-400 transition-colors">
                  Status do Sistema
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-agro-600 dark:hover:text-agro-400 transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 dark:text-gray-400 hover:text-agro-600 dark:hover:text-agro-400 transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-600 dark:text-gray-400 hover:text-agro-600 dark:hover:text-agro-400 transition-colors">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link to="/compliance" className="text-gray-600 dark:text-gray-400 hover:text-agro-600 dark:hover:text-agro-400 transition-colors">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <p className="text-sm text-center text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} AgroB2B Connect. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
