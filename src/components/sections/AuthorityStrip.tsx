import { Boxes, Cloud, Bot, Building2 } from 'lucide-react';

const items = [
  { icon: Boxes, label: 'Mini SaaS propios en desarrollo' },
  { icon: Cloud, label: 'IA en nube, local y VPS' },
  { icon: Bot, label: 'Asistentes y agentes especializados' },
  { icon: Building2, label: 'Respaldado por EmprendePyme.cl' },
];

export default function AuthorityStrip() {
  return (
    <section className="border-y border-glass-border glass">
      <div className="container-max px-6 md:px-12 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-card glass flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-cyan" />
              </div>
              <span className="text-sm text-text font-medium leading-tight">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
