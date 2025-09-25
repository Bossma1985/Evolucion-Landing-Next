import { ComponentType, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface TimelineProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Timeline = ({ children, className, ...props }: TimelineProps) => {
  return (
    <div className={cn("relative flex flex-col gap-8", className)} {...props}>
      {/* Línea vertical decorativa */}
      <div className="absolute left-3.5 top-0 h-full w-px bg-gray-700/50" />
      {children}
    </div>
  );
};

interface TimelineItemProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const TimelineItem = ({
  children,
  className,
  ...props
}: TimelineItemProps) => {
  return (
    <div
      className={cn("relative flex items-start gap-4 pl-8", className)}
      {...props}
    >
      {children}
    </div>
  );
};

interface TimelineDotProps extends HTMLAttributes<HTMLDivElement> {
  icon?: ComponentType<{ className?: string }>;
}

export const TimelineDot = ({
  icon: Icon,
  className,
  ...props
}: TimelineDotProps) => {
  return (
    <div
      className={cn(
        "absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full bg-gray-800 ring-4 ring-black ring-offset-black",
        className
      )}
      {...props}
    >
      <div className="absolute h-full w-full rounded-full bg-red-600/30 blur-md" />
      {Icon ? (
        <Icon className="h-4 w-4 text-red-500" />
      ) : (
        <div className="h-2 w-2 rounded-full bg-red-500" />
      )}
    </div>
  );
};

interface TimelineContentProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const TimelineContent = ({
  children,
  className,
  ...props
}: TimelineContentProps) => {
  return (
    <div className={cn("flex-1", className)} {...props}>
      {children}
    </div>
  );
};

interface TimelineTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export const TimelineTitle = ({
  children,
  className,
  ...props
}: TimelineTitleProps) => {
  return (
    <h3
      className={cn("text-lg font-semibold text-white", className)}
      {...props}
    >
      {children}
    </h3>
  );
};

interface TimelineDescriptionProps
  extends HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export const TimelineDescription = ({
  children,
  className,
  ...props
}: TimelineDescriptionProps) => {
  return (
    <p className={cn("mt-1 text-sm text-gray-400", className)} {...props}>
      {children}
    </p>
  );
};

interface TimelineTimeProps extends HTMLAttributes<HTMLTimeElement> {
  children: React.ReactNode;
}

export const TimelineTime = ({
  children,
  className,
  ...props
}: TimelineTimeProps) => {
  return (
    <time
      className={cn(
        "mt-2 inline-block text-xs font-medium text-gray-500",
        className
      )}
      {...props}
    >
      {children}
    </time>
  );
};

interface TimelineBadgeProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const TimelineBadge = ({
  children,
  className,
  ...props
}: TimelineBadgeProps) => {
  return (
    <Badge variant="destructive" className={cn("mt-2", className)} {...props}>
      {children}
    </Badge>
  );
};
