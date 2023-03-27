import { DocumentData } from "firebase/firestore";
import React from "react";
import { useAppDispatch } from "../../app/hooks";
import { setChannelInfo } from "../../features/channelSlice";
import "./SidebarChannel.scss";

type Props = {
  id: string;
  channel: DocumentData;
};

const SidebarChannel = (Props: Props) => {
  const { id, channel } = Props;
  const dispatch = useAppDispatch();

  return (
    <div
      className="sidebarChannle"
      onClick={() =>
        dispatch(
          setChannelInfo({
            channelId: id,
            channelName: channel.channel.channelName,
          })
        )
      }
    >
      <h4>
        <span className="sidebarChannelHash">#</span>
        {channel.channel.channelName}
      </h4>
    </div>
  );
};

export default SidebarChannel;
