import { Button } from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative py-20 px-6 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Find the <span className="text-blue-600">Perfect Job</span> That Fits Your Life.
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg">
            Connect with 5,000+ top companies and startups. Your next career move is just one click away.
          </p>
          <div className="flex gap-4">
            <Button size="lg">Browse Jobs</Button>
            <Button variant="outline" size="lg">Post a Job</Button>
          </div>
        </div>
        <div className="bg-slate-00 h-64 rounded-2xl flex items-center justify-center text-white ">
           <h1 className="text-5xl lg:text-5xl text-red-600 font-bold mb-6">Best Online Job Searching Websites toSecure Your Dream Job</h1>
           </div>
           
        
      </div>
    </section>
  );
}