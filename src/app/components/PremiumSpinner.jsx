const PremiumSpinner = () => {
  return (
    <div className="flex items-center justify-center py-16">
      <div className="relative">
        {/* Outer gradient ring */}
        <div className="w-12 h-12 rounded-full border-4 border-transparent border-t-yellow-500 border-r-orange-500 animate-spin"></div>

        {/* Inner glow dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full shadow-lg shadow-yellow-500/50"></div>
        </div>
      </div>
    </div>
  );
};

export default PremiumSpinner;
