import { MessageListProps } from '../../types';
import { Message } from '../../general';

import * as S from './message-list.styles';

const MessageList: React.FC<MessageListProps> = ({ items, ...rest }) => {
  return items.length > 0 ? (
    <Message {...rest}>
      <S.List>
        {items.map((item, index) => {
          return <S.Item key={index}>{item}</S.Item>;
        })}
      </S.List>
    </Message>
  ) : null;
};

export default MessageList;
