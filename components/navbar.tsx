"use client";

// components/Navbar.tsx
import Link from "next/link";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const NavbarComponent = () => {
    return (
        <div className="flex justify-between flex-row w-full top-0 p-4 z-10 fixed bg-white">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Overview</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <a
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                            href="/"
                                        >
                                            <Icons.logo className="h-6 w-6" />
                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                CN-Overview
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                Overview of all the molecules in
                                                the database on ChemNexus. Data
                                                rich, interactive and
                                                user-friendly.
                                            </p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <ListItem href="/overview/card" title="Card">
                                    View all the molecules in the database in a
                                    card format.
                                </ListItem>
                                <ListItem href="/overview/table" title="Table">
                                    View the table of all the molecules in the
                                    database.
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Download</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <a
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                            href="/"
                                        >
                                            <Icons.logo className="h-6 w-6" />
                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                CN-Download
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                Download the molecule(s) from
                                                the database on ChemNexus.
                                                Choose to download a single
                                                molecule or multiple molecules.
                                            </p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <ListItem
                                    href="/download/molecules"
                                    title="CAS ID"
                                >
                                    Download a single molecule by its unique CAS
                                    ID.
                                </ListItem>
                                <ListItem
                                    href="/download/classtypes"
                                    title="Class Type"
                                >
                                    Download a group of molecules of the same
                                    class type.
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Link href="/search" legacyBehavior passHref>
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                            >
                                Search
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger>
                            External JS
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <a
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                            href="/"
                                        >
                                            <Icons.logo className="h-6 w-6" />
                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                CN-Ext
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                ChemNexus also supports multiple
                                                external JS library such as
                                                ChemDoodle and JSmol. Play with
                                                them here.
                                            </p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <ListItem
                                    href="/externalJS/3dmol"
                                    title="3Dmol"
                                >
                                    3Dmol: an open-source Java(Script) viewer
                                    for chemical structures in 3D.
                                </ListItem>
                                <ListItem
                                    href="/externalJS/chemdoodle"
                                    title="ChemDoodle"
                                >
                                    A pure JavaScript chemical graphics and
                                    cheminformatics library.
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            <div className="text-lg font-bold">
                <Link href="/">ChemNexus</Link>
            </div>
        </div>
    );
};

export default NavbarComponent;

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";
