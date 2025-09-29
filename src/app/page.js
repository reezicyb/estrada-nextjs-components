import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";
import SkillsList from "../components/SkillsList";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-2xl bg-[#1e1e30]/60 backdrop-blur-lg rounded-2xl shadow-2xl border border-violet-700/40 p-8 space-y-8">
        <Header />
        <ProfileCard />
        <SkillsList />
        <Footer />
      </div>
    </main>
  );
}
