import React, { useEffect, useState, useRef } from 'react';
import { Globe, ChevronDown, Search } from 'lucide-react';

interface Language {
  code: string;
  name: string;
  flag: string;
}

// Comprehensive list of Google Translate supported languages.
// We place Italian (source) and English (global) at the top, followed by the rest alphabetically.
const LANGUAGES: Language[] = [
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'af', name: 'Afrikaans', flag: '🇿🇦' },
  { code: 'sq', name: 'Albanian', flag: '🇦🇱' },
  { code: 'am', name: 'Amharic', flag: '🇪🇹' },
  { code: 'ar', name: 'Arabic', flag: '🇸🇦' },
  { code: 'hy', name: 'Armenian', flag: '🇦🇲' },
  { code: 'az', name: 'Azerbaijani', flag: '🇦🇿' },
  { code: 'eu', name: 'Basque', flag: '🇪🇸' },
  { code: 'be', name: 'Belarusian', flag: '🇧🇾' },
  { code: 'bn', name: 'Bengali', flag: '🇧🇩' },
  { code: 'bs', name: 'Bosnian', flag: '🇧🇦' },
  { code: 'bg', name: 'Bulgarian', flag: '🇧🇬' },
  { code: 'ca', name: 'Catalan', flag: '🇪🇸' },
  { code: 'ceb', name: 'Cebuano', flag: '🇵🇭' },
  { code: 'ny', name: 'Chichewa', flag: '🇲🇼' },
  { code: 'zh-CN', name: 'Chinese (Simplified)', flag: '🇨🇳' },
  { code: 'zh-TW', name: 'Chinese (Traditional)', flag: '🇨🇳' },
  { code: 'co', name: 'Corsican', flag: '🇫🇷' },
  { code: 'hr', name: 'Croatian', flag: '🇭🇷' },
  { code: 'cs', name: 'Czech', flag: '🇨🇿' },
  { code: 'da', name: 'Danish', flag: '🇩🇰' },
  { code: 'nl', name: 'Dutch', flag: '🇳🇱' },
  { code: 'eo', name: 'Esperanto', flag: '🌐' },
  { code: 'et', name: 'Estonian', flag: '🇪🇪' },
  { code: 'tl', name: 'Filipino', flag: '🇵🇭' },
  { code: 'fi', name: 'Finnish', flag: '🇫🇮' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'fy', name: 'Frisian', flag: '🇳🇱' },
  { code: 'gl', name: 'Galician', flag: '🇪🇸' },
  { code: 'ka', name: 'Georgian', flag: '🇬🇪' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'el', name: 'Greek', flag: '🇬🇷' },
  { code: 'gu', name: 'Gujarati', flag: '🇮🇳' },
  { code: 'ht', name: 'Haitian Creole', flag: '🇭🇹' },
  { code: 'ha', name: 'Hausa', flag: '🇳🇬' },
  { code: 'haw', name: 'Hawaiian', flag: '🇺🇸' },
  { code: 'iw', name: 'Hebrew', flag: '🇮🇱' },
  { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
  { code: 'hmn', name: 'Hmong', flag: '🌐' },
  { code: 'hu', name: 'Hungarian', flag: '🇭🇺' },
  { code: 'is', name: 'Icelandic', flag: '🇮🇸' },
  { code: 'ig', name: 'Igbo', flag: '🇳🇬' },
  { code: 'id', name: 'Indonesian', flag: '🇮🇩' },
  { code: 'ga', name: 'Irish', flag: '🇮🇪' },
  { code: 'ja', name: 'Japanese', flag: '🇯🇵' },
  { code: 'jv', name: 'Javanese', flag: '🇮🇩' },
  { code: 'kn', name: 'Kannada', flag: '🇮🇳' },
  { code: 'kk', name: 'Kazakh', flag: '🇰🇿' },
  { code: 'km', name: 'Khmer', flag: '🇰🇭' },
  { code: 'rw', name: 'Kinyarwanda', flag: '🇷🇼' },
  { code: 'ko', name: 'Korean', flag: '🇰🇷' },
  { code: 'ku', name: 'Kurdish (Kurmanji)', flag: '🇮🇶' },
  { code: 'ky', name: 'Kyrgyz', flag: '🇰🇬' },
  { code: 'lo', name: 'Lao', flag: '🇱🇦' },
  { code: 'la', name: 'Latin', flag: '🌐' },
  { code: 'lv', name: 'Latvian', flag: '🇱🇻' },
  { code: 'lt', name: 'Lithuanian', flag: '🇱🇹' },
  { code: 'lb', name: 'Luxembourgish', flag: '🇱🇺' },
  { code: 'mk', name: 'Macedonian', flag: '🇲🇰' },
  { code: 'mg', name: 'Malagasy', flag: '🇲🇬' },
  { code: 'ms', name: 'Malay', flag: '🇲🇾' },
  { code: 'ml', name: 'Malayalam', flag: '🇮🇳' },
  { code: 'mt', name: 'Maltese', flag: '🇲🇹' },
  { code: 'mi', name: 'Maori', flag: '🇳🇿' },
  { code: 'mr', name: 'Marathi', flag: '🇮🇳' },
  { code: 'mn', name: 'Mongolian', flag: '🇲🇳' },
  { code: 'my', name: 'Myanmar (Burmese)', flag: '🇲🇲' },
  { code: 'ne', name: 'Nepali', flag: '🇳🇵' },
  { code: 'no', name: 'Norwegian', flag: '🇳🇴' },
  { code: 'or', name: 'Odia (Oriya)', flag: '🇮🇳' },
  { code: 'ps', name: 'Pashto', flag: '🇦🇫' },
  { code: 'fa', name: 'Persian', flag: '🇮🇷' },
  { code: 'pl', name: 'Polish', flag: '🇵🇱' },
  { code: 'pt', name: 'Portuguese', flag: '🇵🇹' },
  { code: 'pa', name: 'Punjabi', flag: '🇮🇳' },
  { code: 'ro', name: 'Romanian', flag: '🇷🇴' },
  { code: 'ru', name: 'Russian', flag: '🇷🇺' },
  { code: 'sm', name: 'Samoan', flag: '🇼🇸' },
  { code: 'gd', name: 'Scots Gaelic', flag: '🇬🇧' },
  { code: 'sr', name: 'Serbian', flag: '🇷🇸' },
  { code: 'st', name: 'Sesotho', flag: '🇿🇦' },
  { code: 'sn', name: 'Shona', flag: '🇿🇼' },
  { code: 'sd', name: 'Sindhi', flag: '🇵🇰' },
  { code: 'si', name: 'Sinhala', flag: '🇱🇰' },
  { code: 'sk', name: 'Slovak', flag: '🇸🇰' },
  { code: 'sl', name: 'Slovenian', flag: '🇸🇮' },
  { code: 'so', name: 'Somali', flag: '🇸🇴' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'su', name: 'Sundanese', flag: '🇮🇩' },
  { code: 'sw', name: 'Swahili', flag: '🇰🇪' },
  { code: 'sv', name: 'Swedish', flag: '🇸🇪' },
  { code: 'tg', name: 'Tajik', flag: '🇹🇯' },
  { code: 'ta', name: 'Tamil', flag: '🇮🇳' },
  { code: 'tt', name: 'Tatar', flag: '🇷🇺' },
  { code: 'te', name: 'Telugu', flag: '🇮🇳' },
  { code: 'th', name: 'Thai', flag: '🇹🇭' },
  { code: 'tr', name: 'Turkish', flag: '🇹🇷' },
  { code: 'tk', name: 'Turkmen', flag: '🇹🇲' },
  { code: 'uk', name: 'Ukrainian', flag: '🇺🇦' },
  { code: 'ur', name: 'Urdu', flag: '🇵🇰' },
  { code: 'ug', name: 'Uyghur', flag: '🇨🇳' },
  { code: 'uz', name: 'Uzbek', flag: '🇺🇿' },
  { code: 'vi', name: 'Vietnamese', flag: '🇻🇳' },
  { code: 'cy', name: 'Welsh', flag: '🇬🇧' },
  { code: 'xh', name: 'Xhosa', flag: '🇿🇦' },
  { code: 'yi', name: 'Yiddish', flag: '🌐' },
  { code: 'yo', name: 'Yoruba', flag: '🇳🇬' },
  { code: 'zu', name: 'Zulu', flag: '🇿🇦' }
];

export const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('it');
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Initialize Google Translate Script and check cookie
  useEffect(() => {
    // Read cookie to set initial active language
    const getActiveLang = () => {
      const match = document.cookie.match(/googtrans=([^;]+)/);
      if (match) {
        const val = decodeURIComponent(match[1]);
        const parts = val.split('/');
        const lang = parts[parts.length - 1];
        return lang || 'it';
      }
      return 'it';
    };

    setCurrentLang(getActiveLang());

    // Inject Google Translate script dynamically if not already present
    const id = 'google-translate-script';
    if (!document.getElementById(id)) {
      const script = document.createElement('script');
      script.id = id;
      script.type = 'text/javascript';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }

    // Set callback function on window
    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: 'it',
          layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Reset search query when dropdown opens/closes
  useEffect(() => {
    if (!isOpen) {
      setSearchQuery('');
    }
  }, [isOpen]);

  const handleLanguageChange = (langCode: string) => {
    const cookieValue = langCode === 'it' ? '' : `/it/${langCode}`;
    
    // Clear cookies for path / and various domain configurations
    const domains = [
      '',
      window.location.hostname,
      `.${window.location.hostname}`,
      `.${window.location.hostname.split('.').slice(-2).join('.')}`,
    ];

    domains.forEach(domain => {
      const domainStr = domain ? `; domain=${domain}` : '';
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/${domainStr}`;
    });

    if (cookieValue) {
      // Set new cookie
      document.cookie = `googtrans=${cookieValue}; path=/;`;
      document.cookie = `googtrans=${cookieValue}; path=/; domain=${window.location.hostname}`;
      document.cookie = `googtrans=${cookieValue}; path=/; domain=.${window.location.hostname.replace(/^www\./, '')}`;
    }

    setCurrentLang(langCode);
    setIsOpen(false);
    window.location.reload();
  };

  const activeLangObj = LANGUAGES.find(l => l.code === currentLang) || LANGUAGES[0];

  // Filter languages based on search query
  const filteredLanguages = LANGUAGES.filter(
    lang =>
      lang.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lang.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative notranslate" ref={dropdownRef}>

      {/* Dropdown Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer text-on-surface text-label-md select-none outline-none"
      >
        <Globe size={16} className="text-secondary" />
        <span className="font-medium mr-1">{activeLangObj.flag} {activeLangObj.name}</span>
        <ChevronDown size={12} className={`text-on-surface-variant transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-60 rounded-md bg-surface-container-high/95 border border-white/10 backdrop-blur-md shadow-lg py-2 z-50 animate-fade-in flex flex-col max-h-[350px]">
          {/* Search Bar Input */}
          <div className="px-3 pb-2 mb-1 border-b border-white/10 flex items-center gap-2">
            <Search size={14} className="text-on-surface-variant shrink-0" />
            <input
              type="text"
              placeholder="Cerca lingua..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-none text-label-md text-on-surface placeholder:text-on-surface-variant focus:outline-none"
              autoFocus
            />
          </div>

          {/* Languages List Container */}
          <div className="overflow-y-auto flex-1 custom-scrollbar">
            {filteredLanguages.length > 0 ? (
              filteredLanguages.map((lang) => {
                const isActive = lang.code === currentLang;
                return (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`w-full flex items-center gap-3 px-4 py-2 text-left font-medium transition-all duration-200 cursor-pointer text-label-md select-none border-none outline-none ${
                      isActive
                        ? 'text-primary bg-white/5 font-bold'
                        : 'text-on-surface-variant hover:text-on-surface hover:bg-white/5'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                );
              })
            ) : (
              <div className="px-4 py-3 text-label-md text-on-surface-variant text-center">
                Nessuna lingua trovata
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
