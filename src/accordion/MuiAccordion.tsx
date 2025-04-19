import { Accordion, AccordionProps, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ReactNode } from 'react';

export interface MuiAccordionProps extends AccordionProps {
  children: NonNullable<ReactNode>;
  label: ReactNode;
}

export const MuiAccordion = ({ children, label, ...rest }: MuiAccordionProps) => (
  <Accordion {...rest}>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      {label}
    </AccordionSummary>
    <AccordionDetails>
      {children}
    </AccordionDetails>
  </Accordion>
);
