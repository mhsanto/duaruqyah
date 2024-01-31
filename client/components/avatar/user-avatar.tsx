import Image from "next/image";

const UserAvatar = () => {
    return ( <div className="flex items-center gap-2">
        <Image src="/assets/icons/avatar.svg" width={25} height={25} alt="avatar" className="w-[2.8125rem]" />
        <Image src="/assets/icons/down-arrow.svg" width={10} height={10} alt="avatar"  />

    </div> );
}
 
export default UserAvatar;