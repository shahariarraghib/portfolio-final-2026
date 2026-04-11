import socialData from "@/content/socialData";
import Link from "next/link";
import React from "react";

const ContactSection = () => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="flex gap-3">
          {socialData.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                target="_blank"
                rel="noopener noreferrer"
                key={item.name}
                href={item.href}
                aria-label={`${item.name} (opens in a new tab)`}
                className="w-8 h-8 rounded-full flex items-center justify-center text-black  transition-transform hover:-translate-y-1 "
              >
                <span className="flex" aria-hidden="true">
                  <Icon />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
