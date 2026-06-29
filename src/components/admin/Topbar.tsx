function Topbar() {
    return (
      <header className="bg-white h-20 shadow flex justify-between items-center px-10">
  
        <h2 className="text-3xl font-bold">
          Dashboard
        </h2>
  
        <div className="flex items-center gap-4">
  
          <div className="w-12 h-12 rounded-full bg-green-800 text-white flex items-center justify-center font-bold">
            A
          </div>
  
          <div>
  
            <h3 className="font-semibold">
              Administrator
            </h3>
  
            <p className="text-gray-500 text-sm">
              Admin Desa
            </p>
  
          </div>
  
        </div>
  
      </header>
    );
  }
  
  export default Topbar;