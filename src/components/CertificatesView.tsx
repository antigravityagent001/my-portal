import React from 'react';
import { Award, Clock } from 'lucide-react';

export const CertificatesView: React.FC = () => {
  return (
    <section aria-label="Certificates Section" className="mt-4">
      {/* Empty State for Certificates */}
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 sm:p-16 border border-slate-200/80 shadow-sm text-center max-w-2xl mx-auto">
        <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-3xl shadow-xs">
          📜
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold mb-3">
          <Clock className="w-3.5 h-3.5 text-slate-500" />
          <span>Coming Soon</span>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">
          Certificates
        </h2>
        <p className="text-sm text-slate-500 mt-2 max-w-md mx-auto leading-relaxed">
          Certifications are currently empty and will be updated as credentials become available.
        </p>
      </div>
    </section>
  );
};
