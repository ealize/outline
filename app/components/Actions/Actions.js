// @flow
import styled from 'styled-components';
import Flex from 'shared/components/Flex';
import { layout, color } from 'shared/styles/constants';

export const Action = styled(Flex)`
  justify-content: center;
  align-items: center;
  padding: 0 0 0 10px;

  a {
    color: ${color.text};
    height: 24px;
  }
`;

export const Separator = styled.div`
  margin-left: 12px;
  width: 1px;
  height: 20px;
  background: ${color.slateLight};
`;

const Actions = styled(Flex)`
  position: fixed;
  top: 0;
  right: 0;
  padding: ${layout.vpadding} ${layout.hpadding} 8px 8px;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.9);
  -webkit-backdrop-filter: blur(20px);

  @media print {
    display: none;
  }
`;

export default Actions;
