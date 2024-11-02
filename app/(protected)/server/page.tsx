import { currentUser } from "@/lib/auth";
import { UserInfo } from "@/components/user-info";

const ServerPage = async () => {
    const user = await currentUser();

    return (
        <div>
            <UserInfo 
                user={user}
                label="💻 Server component"
            />
        </div>
    );
};

export default ServerPage;