// This is the footer component that will be displayed at the bottom of all pages of the website.

import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-12 px-4 md:px-6 lg:px-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="space-y-4">
                    <h4 className="text-gray-300 font-semibold">Overview</h4>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                className="hover:text-gray-200 transition-colors"
                                href="#"
                            >
                                About ChemNexus
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="hover:text-gray-200 transition-colors"
                                href="#"
                            >
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="hover:text-gray-200 transition-colors"
                                href="#"
                            >
                                Pricing
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h4 className="text-gray-300 font-semibold">Explore</h4>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                className="hover:text-gray-200 transition-colors"
                                href="#"
                            >
                                Download
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="hover:text-gray-200 transition-colors"
                                href="#"
                            >
                                Search
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="hover:text-gray-200 transition-colors"
                                href="#"
                            >
                                Community
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h4 className="text-gray-300 font-semibold">Resources</h4>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                className="hover:text-gray-200 transition-colors"
                                href="#"
                            >
                                Documentation
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="hover:text-gray-200 transition-colors"
                                href="#"
                            >
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="hover:text-gray-200 transition-colors"
                                href="#"
                            >
                                Support
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h4 className="text-gray-300 font-semibold">Powered By</h4>
                    <div className="space-y-2">
                        <p>
                            This website uses the following external libraries:
                        </p>
                        <ul className="space-y-1">
                            <li>
                                <Link
                                    className="hover:text-gray-200 transition-colors"
                                    href="https://3dmol.org/doc/index.htmls"
                                    target="_blank"
                                >
                                    3Dmol
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:text-gray-200 transition-colors"
                                    href="https://partridgejiang.github.io/Kekule.js/"
                                    target="_blank"
                                >
                                    Kekule.js
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-8 text-center">
                <p>© 2024 ChemNexus. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
