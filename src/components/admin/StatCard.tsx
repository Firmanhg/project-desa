type Props = {
    title: string;
    total: string;
    color: string;
  };
  
  function StatCard({ title, total, color }: Props) {
    return (
      <div className="bg-white rounded-3xl shadow p-8">
  
        <p className="text-gray-500">
          {title}
        </p>
  
        <h1
          className="text-5xl font-bold mt-4"
          style={{ color }}
        >
          {total}
        </h1>
  
      </div>
    );
  }
  
  export default StatCard;