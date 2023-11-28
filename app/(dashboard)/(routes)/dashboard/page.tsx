"use client";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import {
  LayoutDashboard,
  MessageSquare,
  ImageIcon,
  VideoIcon,
  Music,
  Code,
  ArrowRight,
} from "lucide-react";
const DashboardPage = () => {
  const router = useRouter();
  const tools = [
    {
      label: "Dashbord",
      icon: LayoutDashboard,
      href: "/dashboard",
      bgcolor: "text-sky-500/10",
      color: "text-sky-500",
    },
    {
      label: "Conversation",
      icon: MessageSquare,
      href: "/conversation",
      bgcolor: "text-violet-500/10",
      color: "text-violet-500",
    },
    {
      label: "Image Generation",
      icon: ImageIcon,
      href: "/image",
      bgcolor: "text-pink-700/10",
      color: "text-pink-700",
    },
    {
      label: "Video Generation",
      icon: VideoIcon,
      href: "/video",
      bgcolor: "text-orange-700/10",
      color: "text-orange-700",
    },
    {
      label: "Music Generation",
      icon: Music,
      href: "/music",
      bgcolor: "text-emerald-500/10",
      color: "text-emerald-500",
    },
    {
      label: "Code Generation",
      icon: Code,
      href: "/code",
      bgcolor: "text-green-700/10",
      color: "text-green-700",
    },
  ];
  return (
    <div className="mb-8 space-y-4">
      <h2 className="text-2xl text-center font-bold md:text-4xl">
        Experience the power of AI
      </h2>
      <p className="text-muted-foreground font-light text-sm text-center md:text-large ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque fugit{" "}
      </p>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgcolor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semi-bold">{tool.label}</div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
