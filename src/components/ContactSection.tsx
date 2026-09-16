import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, ExternalLink, MapPin } from 'lucide-react';
import { portfolioInfo } from '../data/portfolioData';

const WEB3FORMS_ACCESS_KEY = '83b9205b-fe7e-443f-8a5c-2216d2eaa816';

interface ContactSectionProps {
  prefilledSubject?: string;
  isDarkMode: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledSubject, isDarkMode }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState(prefilledSubject || 'Richiesta di Collaborazione / Sceneggiatura');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  React.useEffect(() => {
    if (prefilledSubject) {
      setSubject(`Richiesta Sceneggiatura: ${prefilledSubject}`);
    }
  }, [prefilledSubject]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (new FormData(e.currentTarget).get('botcheck')) return;
    setStatus('submitting');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name,
          email,
          subject,
          message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      id="contatti"
      className={`py-24 border-t transition-colors duration-300 ${
        isDarkMode
          ? 'bg-[#141312] text-[#E6DFD5] border-[#E6DFD5]/15'
          : 'bg-[#E6DFD5] text-[#181715] border-[#181715]/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="mb-14 pb-6 border-b border-current/15 flex flex-col md:flex-row md:items-baseline justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-poster font-black tracking-wide uppercase text-[#181715] dark:text-[#E6DFD5]">
              Contatti &amp; Management
            </h2>
            <p className="text-[10px] uppercase font-mono tracking-widest mt-1 text-[#C81D11] font-bold">
              Proposte di Regia • Opzioni su Sceneggiature • Sviluppo Format
            </p>
          </div>

          <a
            href={`mailto:${portfolioInfo.email}`}
            className="text-lg sm:text-xl font-mono tracking-wider hover:text-[#C81D11] transition-colors font-bold"
          >
            {portfolioInfo.email}
          </a>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info & Socials (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className={`p-8 border ${
              isDarkMode ? 'bg-[#1c1a18] border-[#E6DFD5]/15' : 'bg-[#DDD5CB] border-[#181715]/20'
            }`}>
              <h3 className="text-xl font-poster uppercase font-black tracking-wide mb-3">
                Disponibilità Progetti
              </h3>
              <p className={`text-xs leading-relaxed mb-6 ${
                isDarkMode ? 'text-[#E6DFD5]/80' : 'text-[#181715]/80'
              }`}>
                Disponibile per la direzione di opere cinematografiche, stesura di sceneggiature su commissione, consulenze di story editing e sviluppo di pitch deck.
              </p>

              <div className="space-y-3 text-xs font-mono border-t border-current/10 pt-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-3.5 h-3.5 text-[#C81D11]" />
                  <span>Roma, Italia (Disponibile a trasferte)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-3.5 h-3.5 text-[#C81D11]" />
                  <span>{portfolioInfo.email}</span>
                </div>
                <div className="text-[10px] pt-1 opacity-60">
                  <span>P.IVA: {portfolioInfo.vatNumber}</span>
                </div>
              </div>

              {/* Profiles */}
              <div className="mt-8 pt-6 border-t border-current/10">
                <span className="text-[9px] font-mono uppercase tracking-widest text-[#C81D11] font-bold block mb-3">
                  Profili &amp; Riconoscimenti Ufficiali
                </span>
                <div className="flex flex-col space-y-2">
                  {portfolioInfo.socials.map((s, idx) => (
                    <a
                      key={idx}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-between p-3 border text-xs font-mono uppercase tracking-wider transition-colors ${
                        isDarkMode
                          ? 'border-[#E6DFD5]/15 hover:border-[#C81D11] hover:text-[#C81D11] bg-white/5'
                          : 'border-[#181715]/15 hover:border-[#C81D11] hover:text-[#C81D11] bg-black/5'
                      }`}
                    >
                      <span className="font-bold">{s.label}</span>
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Inquiry Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className={`p-8 border ${
              isDarkMode ? 'bg-[#1c1a18] border-[#E6DFD5]/15' : 'bg-[#DDD5CB] border-[#181715]/20'
            }`}>
              <h3 className="text-xl font-poster uppercase font-black tracking-wide mb-1">
                Invia un Messaggio
              </h3>
              <p className={`text-xs mb-6 ${isDarkMode ? 'text-[#E6DFD5]/70' : 'text-[#181715]/70'}`}>
                Compila il form per richiedere il trattamento di una sceneggiatura o avviare un dialogo di produzione.
              </p>

              {status === 'success' && (
                <div className="mb-6 p-4 border border-[#C81D11] bg-[#C81D11]/10 flex items-center gap-3 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#C81D11] flex-shrink-0" />
                  <span>Richiesta inviata con successo. Ti risponderò al più presto.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 border border-[#C81D11] bg-[#C81D11]/10 flex items-center gap-3 text-xs">
                  <AlertCircle className="w-4 h-4 text-[#C81D11] flex-shrink-0" />
                  <span>Invio non riuscito. Riprova, oppure scrivi direttamente a {portfolioInfo.email}.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[9px] font-mono uppercase tracking-widest mb-1.5 opacity-70">
                      Nome / Società di Produzione
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="es. Fargo Film, Rai, Produttore..."
                      className={`w-full px-4 py-2.5 text-xs border transition-colors outline-none font-mono ${
                        isDarkMode
                          ? 'bg-[#141312] border-[#E6DFD5]/20 text-[#E6DFD5] placeholder-[#E6DFD5]/30 focus:border-[#C81D11]'
                          : 'bg-[#E6DFD5] border-[#181715]/20 text-[#181715] placeholder-[#181715]/40 focus:border-[#C81D11]'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-[9px] font-mono uppercase tracking-widest mb-1.5 opacity-70">
                      Email di Contatto
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nome@dominio.it"
                      className={`w-full px-4 py-2.5 text-xs border transition-colors outline-none font-mono ${
                        isDarkMode
                          ? 'bg-[#141312] border-[#E6DFD5]/20 text-[#E6DFD5] placeholder-[#E6DFD5]/30 focus:border-[#C81D11]'
                          : 'bg-[#E6DFD5] border-[#181715]/20 text-[#181715] placeholder-[#181715]/40 focus:border-[#C81D11]'
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[9px] font-mono uppercase tracking-widest mb-1.5 opacity-70">
                    Oggetto
                  </label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className={`w-full px-4 py-2.5 text-xs border transition-colors outline-none font-mono ${
                      isDarkMode
                        ? 'bg-[#141312] border-[#E6DFD5]/20 text-[#E6DFD5] placeholder-[#E6DFD5]/30 focus:border-[#C81D11]'
                        : 'bg-[#E6DFD5] border-[#181715]/20 text-[#181715] placeholder-[#181715]/40 focus:border-[#C81D11]'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-[9px] font-mono uppercase tracking-widest mb-1.5 opacity-70">
                    Messaggio / Dettagli del Progetto
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Descrivi brevemente la richiesta, la tempistica o la tipologia di produzione..."
                    className={`w-full px-4 py-2.5 text-xs border transition-colors outline-none resize-none font-mono ${
                      isDarkMode
                        ? 'bg-[#141312] border-[#E6DFD5]/20 text-[#E6DFD5] placeholder-[#E6DFD5]/30 focus:border-[#C81D11]'
                        : 'bg-[#E6DFD5] border-[#181715]/20 text-[#181715] placeholder-[#181715]/40 focus:border-[#C81D11]'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3.5 bg-[#C81D11] hover:bg-[#A8170D] disabled:opacity-60 disabled:cursor-not-allowed text-white text-[10px] uppercase font-mono tracking-widest font-bold flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{status === 'submitting' ? 'Invio in corso…' : 'Invia Richiesta Diretta'}</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
