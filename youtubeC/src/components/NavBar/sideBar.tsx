import {  History,Clock4, ThumbsUp } from 'lucide-react';
import { FaHouse } from "react-icons/fa6";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { CgPlayList } from "react-icons/cg";
import { GoVideo } from "react-icons/go";


const menuItems = [
  { icon: FaHouse, label: 'Accueil' },
  { icon: SiYoutubeshorts, label: 'Shorts' },
  { icon: MdSubscriptions, label: 'Abonnement' },
  { icon: History, label: 'Historique' },
  { icon: CgPlayList, label: 'Playlist' },
  { icon: GoVideo, label: 'Vos vidéos' },
  { icon: Clock4, label: 'À regarder plus tard' },
  { icon: ThumbsUp, label: 'Vidéo "j\'aime"' },
 
];

interface SidebarProps {
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
  console.log("isOpen:", isOpen);
  
  return (
    <aside className={` ${isOpen ? "block" : "hidden"} fixed left-0 top-14 w-60 h-screen bg-white border-r overflow-y-auto transition-transform duration-300 md:translate-x-0`}>
      <div className="py-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className="w-full flex items-center gap-4 px-6 py-2 hover:bg-gray-100"
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </aside>
  );
}