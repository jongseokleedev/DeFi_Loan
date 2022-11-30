import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgRepayLoan } from "./types/loan/loan/tx";
import { MsgCancelLoan } from "./types/loan/loan/tx";
import { MsgLiquidateLoan } from "./types/loan/loan/tx";
import { MsgRequestLoan } from "./types/loan/loan/tx";
import { MsgApproveLoan } from "./types/loan/loan/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/loan.loan.MsgRepayLoan", MsgRepayLoan],
    ["/loan.loan.MsgCancelLoan", MsgCancelLoan],
    ["/loan.loan.MsgLiquidateLoan", MsgLiquidateLoan],
    ["/loan.loan.MsgRequestLoan", MsgRequestLoan],
    ["/loan.loan.MsgApproveLoan", MsgApproveLoan],
    
];

export { msgTypes }