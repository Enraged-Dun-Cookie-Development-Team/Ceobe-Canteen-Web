import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { fetchCeobeLinkData } from "@/data/fetch";
import type { CeobeLink, CeobeFontIcon } from "@/data/types";

import { cn } from "./lib/utils";

export function CardLinks() {
  const [links, setLinks] = useState<CeobeLink[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const { toast } = useToast();

  const refreshPage = () => {
    window.location.reload();
  };

  useEffect(() => {
    const getLinks = async () => {
      const resp = await fetchCeobeLinkData();
      if (resp.code !== 0) {
        toast({
          title: "获取数据时出错",
          description: resp.msg,
          variant: "destructive",
          action: (
            <ToastAction altText="知道了" onClick={refreshPage}>
              呜呜
            </ToastAction>
          ),
        });
      } else {
        setLinks(resp.data ?? []);
      }
    };
    getLinks();
  }, [toast]);

  const isPic = (cover: string | CeobeFontIcon | null): cover is string => {
    return typeof cover === "string";
  };
  const isFontIcon = (
    cover: string | CeobeFontIcon | null
  ): cover is CeobeFontIcon => {
    return cover !== null && !isPic(cover);
  };

  return (
    <>
      {links.map((link, id) => (
        <Card
          key={id}
          className="hover:bg-muted"
          onMouseEnter={() => setSelectedIndex(id)}
          onMouseLeave={() => setSelectedIndex(null)}
        >
          <CardHeader>
            <div className="flex justify-between items-center space-x-2">
              <div className="flex items-center space-x-2">
                {isPic(link.cover) && (
                  <img
                    src={link.cover}
                    alt={link.name}
                    className={cn({
                      "w-5 h-5 rounded-none": true,
                      "animate-jump-jump": id === selectedIndex,
                    })}
                  />
                )}
                {isFontIcon(link.cover) && (
                  <FontAwesomeIcon
                    icon={link.cover.icon}
                    color={link.cover.color}
                    bounce={id === selectedIndex}
                  />
                )}
                <CardTitle>{link.name}</CardTitle>
              </div>
              <a href={link.url} target="_blank" rel="noreferrer">
                <Button size="sm" className="ml-auto">
                  前往
                </Button>
              </a>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="overflow-ellipsis">
              {link.desc}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
