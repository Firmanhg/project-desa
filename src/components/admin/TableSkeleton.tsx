export default function TableSkeleton() {
    return (
      <div className="animate-pulse">
  
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
  
          <div className="h-8 w-56 bg-gray-200 rounded"></div>
  
          <div className="h-10 w-40 bg-gray-200 rounded-lg"></div>
  
        </div>
  
        {/* Table */}
        <div className="bg-white rounded-2xl shadow border overflow-hidden">
  
          <div className="grid grid-cols-4 gap-4 px-6 py-5 border-b">
  
            <div className="h-5 bg-gray-200 rounded"></div>
            <div className="h-5 bg-gray-200 rounded"></div>
            <div className="h-5 bg-gray-200 rounded"></div>
            <div className="h-5 bg-gray-200 rounded"></div>
  
          </div>
  
          {[...Array(6)].map((_, index) => (
  
            <div
              key={index}
              className="grid grid-cols-4 gap-4 px-6 py-5 border-b"
            >
  
              <div className="h-5 bg-gray-100 rounded"></div>
  
              <div className="h-16 w-24 bg-gray-200 rounded-lg"></div>
  
              <div className="h-5 bg-gray-100 rounded"></div>
  
              <div className="flex gap-2">
  
                <div className="h-9 w-20 bg-gray-200 rounded-lg"></div>
  
                <div className="h-9 w-20 bg-gray-200 rounded-lg"></div>
  
              </div>
  
            </div>
  
          ))}
  
        </div>
  
      </div>
    );
  }