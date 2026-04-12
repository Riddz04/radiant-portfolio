const EmailSidebar = () => {
  return (
    <div className="hidden lg:flex fixed right-8 bottom-0 flex-col items-center space-y-5 z-40">
      <a
        href="mailto:riddhidhawan.work@gmail.com"
        className="text-slate-light hover:text-green-accent transition-all duration-300 font-mono text-xs tracking-[0.2em]"
        style={{ writingMode: "vertical-rl" }}
      >
        riddhidhawan.work@gmail.com
      </a>
      <div className="w-px h-24 bg-gradient-to-t from-slate-light/50 to-transparent" />
    </div>
  );
};

export default EmailSidebar;
