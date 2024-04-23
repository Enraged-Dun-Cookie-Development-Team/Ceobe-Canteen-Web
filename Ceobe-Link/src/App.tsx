import OfficalSiteIcon from "@/assets/offical-site.gif";
import { Separator } from "@/components/ui/separator";
import { Toaster } from "@/components/ui/toaster";
import "@/index.css";
import { ThemeProvider } from "@/theme/provider";
import { ThemeToggle } from "@/theme/toggle";

import { CardLinks } from "./CardLinks";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="h-full flex-1 flex-col space-y-4 p-8 flex min-w-96 select-none">
        <div className="flex items-center justify-between space-y-2 px-4 pt-2 py-4 fixed top-0 left-0 right-0 shadow-md bg-background">
          <img
            src={OfficalSiteIcon}
            alt="Ceobe"
            className="w-12 h-12 rounded-sm"
          />
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight">小刻食堂直达</h2>
            <p className="text-muted-foreground">在这里前往食堂的各个地方</p>
          </div>
          <div className="flex items-center space-x-2">
            <ThemeToggle />
          </div>
        </div>
        <div className="pt-10 space-y-4">
          <Separator />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <CardLinks />
          </div>
        </div>
        <div className="flex items-center justify-center space-x-2 p-1 text-primary/50 text-xs lg:hidden">
          到底了哦
        </div>
      </div>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
