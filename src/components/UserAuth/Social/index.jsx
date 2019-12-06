import React from 'react';
import { SocialName, WithFacebook, WithGoogle} from "./styled";

const Social = ()=> (
	<>
		<WithGoogle>
			Continue with <SocialName color="#287BDD">Google</SocialName>
		</WithGoogle>
		<WithFacebook>
			Continue with <SocialName color="#175195">Facebook</SocialName>
		</WithFacebook>
	</>
);

export default Social;