import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <>
      {/* PC */}
      <header className="text-slate-600 xl:grid grid-cols-6 bg-white py-6 items-center border-b-2 border-slate-300 hidden fixed top-0 right-0 left-0">
        <div className="col-span-1 flex items-center pl-8">
          <Image src="/logo.svg" alt="logo" height={25} width={25} />
          <p className="text-xl ml-2 uppercase font-semibold text-[#34cea1] tracking-wide">
            Fetek
          </p>
        </div>
        <ul className="flex justify-between col-span-4 items-center">
          <li className="cursor-pointer uppercase  font-semibold hover:text-[#34cea1] text-base col-span-1">
            About Fetek
          </li>
          <li className="cursor-pointer uppercase font-semibold hover:text-[#34cea1] text-base col-span-1">
            Services
          </li>
          <li className="cursor-pointer uppercase font-semibold hover:text-[#34cea1] text-base col-span-1">
            Technologies
          </li>
          <li className="cursor-pointer uppercase font-semibold hover:text-[#34cea1] text-base col-span-1">
            Process
          </li>
          <li className="font-medium hover:text-[#34cea1] col-span-1">
            <NavigationMenu className="">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-semibold text-base uppercase">
                    Portfolio
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="text-base">
                    <NavigationMenuLink className="font-semibold text-base block w-[180px] px-2 py-6 uppercase cursor-pointer hover:bg-slate-300 text-center text-slate-700">
                      Data Services
                    </NavigationMenuLink>
                    <NavigationMenuLink className="font-semibold text-base block w-[180px] px-2 py-6 uppercase cursor-pointer hover:bg-slate-300 text-center text-slate-700">
                      Data Services
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </li>
        </ul>

        <div className="col-span-1 justify-self-end pr-8">
          <Select>
            <SelectTrigger className="w-[80px] text-xl">
              <SelectValue
                defaultValue="en"
                placeholder={
                  <Image
                    src="/flag_uk.svg"
                    alt="UK"
                    width={30}
                    height={30}
                    className="rounded-md"
                  />
                }
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en" className="w-[80px]">
                <Image
                  src="/flag_uk.svg"
                  alt="English"
                  width={30}
                  height={30}
                  className="rounded-md"
                />
              </SelectItem>
              <SelectItem value="vie" className="w-[80px]">
                <Image
                  src="/flag_vietnam.svg"
                  alt="Vietnamese"
                  width={30}
                  height={30}
                  className="rounded-md"
                />
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </header>

      {/* Mobile */}
      <header className="fixed top-0 right-0 left-0 xl:hidden bg-white py-4 items-center border-b-2 border-slate-300 flex justify-between">
        <div className="flex items-center pl-4">
          <Image src="/logo.svg" alt="logo" height={20} width={20} />
          <p className="text-lg ml-2 uppercase font-semibold text-[#34cea1] tracking-wide">
            Fetek
          </p>
        </div>
        <div className="">
          <Sheet>
            <SheetTrigger className="mr-4">
              <MenuIcon color="#34cea1" />
            </SheetTrigger>
            <SheetContent>
              <ul className="items-center">
                <li className="cursor-pointer uppercase font-medium hover:text-[#34cea1] text-lg mt-4">
                  About Fetek
                </li>
                <li className="cursor-pointer uppercase font-medium hover:text-[#34cea1] text-lg mt-4">
                  Services
                </li>
                <li className="cursor-pointer uppercase font-medium hover:text-[#34cea1] text-lg mt-4">
                  Technologies
                </li>
                <li className="cursor-pointer uppercase font-medium hover:text-[#34cea1] text-lg mt-4">
                  Process
                </li>
                <li className="font-medium hover:text-[#34cea1] pl-0 mt-4">
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger className="text-xl uppercase pl-0">
                          <p className="active::text-[#34cea1] text-xl">
                            Portfolio
                          </p>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="">
                          <NavigationMenuLink className="block w-[180px] px-2 py-6 uppercase cursor-pointer hover:bg-slate-300 text-center">
                            Data Services
                          </NavigationMenuLink>
                          <NavigationMenuLink className="block w-[180px] px-2 py-6 uppercase cursor-pointer hover:bg-slate-300 text-center">
                            Data Services
                          </NavigationMenuLink>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                </li>
                <li className="cursor-pointer uppercase font-medium hover:text-[#34cea1] text-lg mt-4">
                  <Select>
                    <SelectTrigger className="w-[80px] text-xl">
                      <SelectValue
                        defaultValue="en"
                        placeholder={
                          <Image
                            src="/flag_uk.svg"
                            alt="Vietnam"
                            width={30}
                            height={30}
                          />
                        }
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en" className="w-[70px]">
                        <Image
                          src="/flag_uk.svg"
                          alt="English"
                          width={30}
                          height={30}
                        />
                      </SelectItem>
                      <SelectItem value="vie" className="w-[70px]">
                        <Image
                          src="/flag_vietnam.svg"
                          alt="Vietnamese"
                          width={30}
                          height={30}
                        />
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
};

export default Header;
