export type EndpointInvoicesDuplicate_OutputCREATED = null;
export type EndpointInvoicesList_OutputOK = {
  id: string;
  invoice_number: string;
  bill_to: string | null;
  date: string;
  due_date: string;
  payment_terms: string;
  po_number: string;
  status: "draft" | "sent" | "paid" | "overdue" | "cancelled";
  shipping_address: string;
  tax_type: "rate" | "fixed" | "";
  tax_amount: number;
  discount_type: "rate" | "fixed" | "";
  discount_amount: number;
  shipping_amount: number;
  amount_paid: number;
  notes: string;
  created: string;
  updated: string;
  subtotal: number;
  item_count: number;
  calculated_tax: number;
  calculated_discount: number;
  calculated_shipping: number;
  expand?: {
    bill_to?: {
      id: string;
      name: string;
      address: string;
      email: string;
      phone: string;
      created: string;
      updated: string;
    };
  };
}[];
export type EndpointInvoicesRemove_OutputNO_CONTENT = void;
export type EndpointItemsListByInvoice_OutputOK = {
  id: string;
  invoice: string | null;
  description: string;
  quantity: number;
  rate: number;
  order: number;
}[];
export type EndpointItemsRemove_OutputNO_CONTENT = void;
export type EndpointReceiptsDuplicate_OutputCREATED = null;
export type EndpointReceiptsList_OutputOK = {
  id: string;
  receipt_number: string;
  bill_to: string | null;
  date: string;
  payment_method: string;
  payment_terms: string;
  reference_number: string;
  status: "draft" | "issued" | "cancelled";
  shipping_address: string;
  tax_type: "rate" | "fixed" | "";
  tax_amount: number;
  discount_type: "rate" | "fixed" | "";
  discount_amount: number;
  shipping_amount: number;
  amount_paid: number;
  created: string;
  updated: string;
  subtotal: number;
  item_count: number;
  calculated_tax: number;
  calculated_discount: number;
  calculated_shipping: number;
  expand?: {
    bill_to?: {
      id: string;
      name: string;
      address: string;
      email: string;
      phone: string;
      created: string;
      updated: string;
    };
  };
}[];
export type EndpointReceiptsRemove_OutputNO_CONTENT = void;
export type EndpointReceiptItemsListByReceipt_OutputOK = {
  id: string;
  receipt: string | null;
  description: string;
  quantity: number;
  rate: number;
  order: number;
}[];
export type EndpointReceiptItemsRemove_OutputNO_CONTENT = void;
export type EndpointClientsList_OutputOK = {
  id: string;
  name: string;
  address: string;
  email: string;
  phone: string;
  created: string;
  updated: string;
}[];
export type EndpointClientsRemove_OutputNO_CONTENT = void;

export interface Contract {
  invoices: {
    create: EndpointInvoicesCreate;
    duplicate: EndpointInvoicesDuplicate;
    getById: EndpointInvoicesGetById;
    list: EndpointInvoicesList;
    remove: EndpointInvoicesRemove;
    update: EndpointInvoicesUpdate;
  };
  items: {
    create: EndpointItemsCreate;
    listByInvoice: EndpointItemsListByInvoice;
    remove: EndpointItemsRemove;
    reorder: EndpointItemsReorder;
    update: EndpointItemsUpdate;
  };
  receipts: {
    create: EndpointReceiptsCreate;
    duplicate: EndpointReceiptsDuplicate;
    getById: EndpointReceiptsGetById;
    list: EndpointReceiptsList;
    remove: EndpointReceiptsRemove;
    update: EndpointReceiptsUpdate;
  };
  receiptItems: {
    create: EndpointReceiptItemsCreate;
    listByReceipt: EndpointReceiptItemsListByReceipt;
    remove: EndpointReceiptItemsRemove;
    reorder: EndpointReceiptItemsReorder;
    update: EndpointReceiptItemsUpdate;
  };
  clients: {
    create: EndpointClientsCreate;
    getById: EndpointClientsGetById;
    list: EndpointClientsList;
    remove: EndpointClientsRemove;
    update: EndpointClientsUpdate;
  };
  settings: {
    get: EndpointSettingsGet;
    update: EndpointSettingsUpdate;
  };
}
export interface EndpointInvoicesCreate {
  method: "post";
  input: {
    body?: EndpointInvoicesCreate_InputBody;
  };
  output: {
    CREATED: EndpointInvoicesCreate_OutputCREATED;
  };
  media: null;
}
export interface EndpointInvoicesCreate_InputBody {
  bill_to?: string;
  payment_terms?: string;
  po_number?: string;
  status: "draft" | "sent" | "paid" | "overdue" | "cancelled";
  shipping_address?: string;
  tax_type?: "rate" | "fixed";
  tax_amount?: number;
  discount_type?: "rate" | "fixed";
  discount_amount?: number;
  shipping_amount?: number;
  amount_paid?: number;
  notes?: string;
  date: string;
  due_date: string;
  items?: {
    id?: string;
    description: string;
    quantity: number;
    rate: number;
    order: number;
  }[];
}
export interface EndpointInvoicesCreate_OutputCREATED {
  id: string;
  invoice_number: string;
  bill_to: string | null;
  date: string;
  due_date: string;
  payment_terms: string;
  po_number: string;
  status: "draft" | "sent" | "paid" | "overdue" | "cancelled";
  shipping_address: string;
  tax_type: "rate" | "fixed" | "";
  tax_amount: number;
  discount_type: "rate" | "fixed" | "";
  discount_amount: number;
  shipping_amount: number;
  amount_paid: number;
  notes: string;
  created: string;
  updated: string;
}
export interface EndpointInvoicesDuplicate {
  method: "post";
  input: {
    query?: EndpointInvoicesDuplicate_InputQuery;
  };
  output: {
    CREATED: EndpointInvoicesDuplicate_OutputCREATED;
  };
  media: null;
}
export interface EndpointInvoicesDuplicate_InputQuery {
  id: string;
}
export interface EndpointInvoicesGetById {
  method: "get";
  input: {
    query?: EndpointInvoicesGetById_InputQuery;
  };
  output: {
    OK: EndpointInvoicesGetById_OutputOK;
  };
  media: null;
}
export interface EndpointInvoicesGetById_InputQuery {
  id: string;
}
export interface EndpointInvoicesGetById_OutputOK {
  id: string;
  invoice_number: string;
  bill_to: string | null;
  date: string;
  due_date: string;
  payment_terms: string;
  po_number: string;
  status: "draft" | "sent" | "paid" | "overdue" | "cancelled";
  shipping_address: string;
  tax_type: "rate" | "fixed" | "";
  tax_amount: number;
  discount_type: "rate" | "fixed" | "";
  discount_amount: number;
  shipping_amount: number;
  amount_paid: number;
  notes: string;
  created: string;
  updated: string;
  items: {
    id: string;
    invoice: string | null;
    description: string;
    quantity: number;
    rate: number;
    order: number;
  }[];
  expand?: {
    bill_to?: {
      id: string;
      name: string;
      address: string;
      email: string;
      phone: string;
      created: string;
      updated: string;
    };
  };
}
export interface EndpointInvoicesList {
  method: "get";
  input: {
    query?: EndpointInvoicesList_InputQuery;
  };
  output: {
    OK: EndpointInvoicesList_OutputOK;
  };
  media: null;
}
export interface EndpointInvoicesList_InputQuery {
  status?: "draft" | "sent" | "paid" | "overdue" | "cancelled";
  clientId?: string;
  search?: string;
}
export interface EndpointInvoicesRemove {
  method: "post";
  input: {
    query?: EndpointInvoicesRemove_InputQuery;
  };
  output: {
    NO_CONTENT: EndpointInvoicesRemove_OutputNO_CONTENT;
  };
  media: null;
}
export interface EndpointInvoicesRemove_InputQuery {
  id: string;
}
export interface EndpointInvoicesUpdate {
  method: "post";
  input: {
    query?: EndpointInvoicesUpdate_InputQuery;
    body?: EndpointInvoicesUpdate_InputBody;
  };
  output: {
    OK: EndpointInvoicesUpdate_OutputOK;
  };
  media: null;
}
export interface EndpointInvoicesUpdate_InputQuery {
  id: string;
}
export interface EndpointInvoicesUpdate_InputBody {
  bill_to?: string;
  payment_terms?: string;
  po_number?: string;
  status?: "draft" | "sent" | "paid" | "overdue" | "cancelled";
  shipping_address?: string;
  tax_type?: "rate" | "fixed";
  tax_amount?: number;
  discount_type?: "rate" | "fixed";
  discount_amount?: number;
  shipping_amount?: number;
  amount_paid?: number;
  notes?: string;
  invoice_number?: string;
  date?: string;
  due_date?: string;
  items?: {
    id?: string;
    description: string;
    quantity: number;
    rate: number;
    order: number;
  }[];
}
export interface EndpointInvoicesUpdate_OutputOK {
  id: string;
  invoice_number: string;
  bill_to: string | null;
  date: string;
  due_date: string;
  payment_terms: string;
  po_number: string;
  status: "draft" | "sent" | "paid" | "overdue" | "cancelled";
  shipping_address: string;
  tax_type: "rate" | "fixed" | "";
  tax_amount: number;
  discount_type: "rate" | "fixed" | "";
  discount_amount: number;
  shipping_amount: number;
  amount_paid: number;
  notes: string;
  created: string;
  updated: string;
}
export interface EndpointItemsCreate {
  method: "post";
  input: {
    body?: EndpointItemsCreate_InputBody;
  };
  output: {
    CREATED: EndpointItemsCreate_OutputCREATED;
  };
  media: null;
}
export interface EndpointItemsCreate_InputBody {
  description: string;
  quantity: number;
  rate: number;
  order: number;
  invoice: string;
}
export interface EndpointItemsCreate_OutputCREATED {
  id: string;
  invoice: string | null;
  description: string;
  quantity: number;
  rate: number;
  order: number;
}
export interface EndpointItemsListByInvoice {
  method: "get";
  input: {
    query?: EndpointItemsListByInvoice_InputQuery;
  };
  output: {
    OK: EndpointItemsListByInvoice_OutputOK;
  };
  media: null;
}
export interface EndpointItemsListByInvoice_InputQuery {
  invoiceId: string;
}
export interface EndpointItemsRemove {
  method: "post";
  input: {
    query?: EndpointItemsRemove_InputQuery;
  };
  output: {
    NO_CONTENT: EndpointItemsRemove_OutputNO_CONTENT;
  };
  media: null;
}
export interface EndpointItemsRemove_InputQuery {
  id: string;
}
export interface EndpointItemsReorder {
  method: "post";
  input: {
    body?: EndpointItemsReorder_InputBody;
  };
  output: {
    OK: EndpointItemsReorder_OutputOK;
  };
  media: null;
}
export interface EndpointItemsReorder_InputBody {
  invoiceId: string;
  itemIds: string[];
}
export interface EndpointItemsReorder_OutputOK {
  success: boolean;
}
export interface EndpointItemsUpdate {
  method: "post";
  input: {
    query?: EndpointItemsUpdate_InputQuery;
    body?: EndpointItemsUpdate_InputBody;
  };
  output: {
    OK: EndpointItemsUpdate_OutputOK;
  };
  media: null;
}
export interface EndpointItemsUpdate_InputQuery {
  id: string;
}
export interface EndpointItemsUpdate_InputBody {
  description?: string;
  quantity?: number;
  rate?: number;
  order?: number;
}
export interface EndpointItemsUpdate_OutputOK {
  id: string;
  invoice: string | null;
  description: string;
  quantity: number;
  rate: number;
  order: number;
}
export interface EndpointReceiptsCreate {
  method: "post";
  input: {
    body?: EndpointReceiptsCreate_InputBody;
  };
  output: {
    CREATED: EndpointReceiptsCreate_OutputCREATED;
  };
  media: null;
}
export interface EndpointReceiptsCreate_InputBody {
  bill_to?: string;
  payment_method?: string;
  payment_terms?: string;
  reference_number?: string;
  status: "draft" | "issued" | "cancelled";
  shipping_address?: string;
  tax_type?: "rate" | "fixed";
  tax_amount?: number;
  discount_type?: "rate" | "fixed";
  discount_amount?: number;
  shipping_amount?: number;
  amount_paid?: number;
  date: string;
  items?: {
    id?: string;
    description: string;
    quantity: number;
    rate: number;
    order: number;
  }[];
}
export interface EndpointReceiptsCreate_OutputCREATED {
  id: string;
  receipt_number: string;
  bill_to: string | null;
  date: string;
  payment_method: string;
  payment_terms: string;
  reference_number: string;
  status: "draft" | "issued" | "cancelled";
  shipping_address: string;
  tax_type: "rate" | "fixed" | "";
  tax_amount: number;
  discount_type: "rate" | "fixed" | "";
  discount_amount: number;
  shipping_amount: number;
  amount_paid: number;
  created: string;
  updated: string;
}
export interface EndpointReceiptsDuplicate {
  method: "post";
  input: {
    query?: EndpointReceiptsDuplicate_InputQuery;
  };
  output: {
    CREATED: EndpointReceiptsDuplicate_OutputCREATED;
  };
  media: null;
}
export interface EndpointReceiptsDuplicate_InputQuery {
  id: string;
}
export interface EndpointReceiptsGetById {
  method: "get";
  input: {
    query?: EndpointReceiptsGetById_InputQuery;
  };
  output: {
    OK: EndpointReceiptsGetById_OutputOK;
  };
  media: null;
}
export interface EndpointReceiptsGetById_InputQuery {
  id: string;
}
export interface EndpointReceiptsGetById_OutputOK {
  id: string;
  receipt_number: string;
  bill_to: string | null;
  date: string;
  payment_method: string;
  payment_terms: string;
  reference_number: string;
  status: "draft" | "issued" | "cancelled";
  shipping_address: string;
  tax_type: "rate" | "fixed" | "";
  tax_amount: number;
  discount_type: "rate" | "fixed" | "";
  discount_amount: number;
  shipping_amount: number;
  amount_paid: number;
  created: string;
  updated: string;
  items: {
    id: string;
    receipt: string | null;
    description: string;
    quantity: number;
    rate: number;
    order: number;
  }[];
  expand?: {
    bill_to?: {
      id: string;
      name: string;
      address: string;
      email: string;
      phone: string;
      created: string;
      updated: string;
    };
  };
}
export interface EndpointReceiptsList {
  method: "get";
  input: {
    query?: EndpointReceiptsList_InputQuery;
  };
  output: {
    OK: EndpointReceiptsList_OutputOK;
  };
  media: null;
}
export interface EndpointReceiptsList_InputQuery {
  status?: "draft" | "issued" | "cancelled";
  clientId?: string;
  search?: string;
}
export interface EndpointReceiptsRemove {
  method: "post";
  input: {
    query?: EndpointReceiptsRemove_InputQuery;
  };
  output: {
    NO_CONTENT: EndpointReceiptsRemove_OutputNO_CONTENT;
  };
  media: null;
}
export interface EndpointReceiptsRemove_InputQuery {
  id: string;
}
export interface EndpointReceiptsUpdate {
  method: "post";
  input: {
    query?: EndpointReceiptsUpdate_InputQuery;
    body?: EndpointReceiptsUpdate_InputBody;
  };
  output: {
    OK: EndpointReceiptsUpdate_OutputOK;
  };
  media: null;
}
export interface EndpointReceiptsUpdate_InputQuery {
  id: string;
}
export interface EndpointReceiptsUpdate_InputBody {
  bill_to?: string;
  payment_method?: string;
  payment_terms?: string;
  reference_number?: string;
  status?: "draft" | "issued" | "cancelled";
  shipping_address?: string;
  tax_type?: "rate" | "fixed";
  tax_amount?: number;
  discount_type?: "rate" | "fixed";
  discount_amount?: number;
  shipping_amount?: number;
  amount_paid?: number;
  receipt_number?: string;
  date?: string;
  items?: {
    id?: string;
    description: string;
    quantity: number;
    rate: number;
    order: number;
  }[];
}
export interface EndpointReceiptsUpdate_OutputOK {
  id: string;
  receipt_number: string;
  bill_to: string | null;
  date: string;
  payment_method: string;
  payment_terms: string;
  reference_number: string;
  status: "draft" | "issued" | "cancelled";
  shipping_address: string;
  tax_type: "rate" | "fixed" | "";
  tax_amount: number;
  discount_type: "rate" | "fixed" | "";
  discount_amount: number;
  shipping_amount: number;
  amount_paid: number;
  created: string;
  updated: string;
}
export interface EndpointReceiptItemsCreate {
  method: "post";
  input: {
    body?: EndpointReceiptItemsCreate_InputBody;
  };
  output: {
    CREATED: EndpointReceiptItemsCreate_OutputCREATED;
  };
  media: null;
}
export interface EndpointReceiptItemsCreate_InputBody {
  description: string;
  quantity: number;
  rate: number;
  order: number;
  receipt: string;
}
export interface EndpointReceiptItemsCreate_OutputCREATED {
  id: string;
  receipt: string | null;
  description: string;
  quantity: number;
  rate: number;
  order: number;
}
export interface EndpointReceiptItemsListByReceipt {
  method: "get";
  input: {
    query?: EndpointReceiptItemsListByReceipt_InputQuery;
  };
  output: {
    OK: EndpointReceiptItemsListByReceipt_OutputOK;
  };
  media: null;
}
export interface EndpointReceiptItemsListByReceipt_InputQuery {
  receiptId: string;
}
export interface EndpointReceiptItemsRemove {
  method: "post";
  input: {
    query?: EndpointReceiptItemsRemove_InputQuery;
  };
  output: {
    NO_CONTENT: EndpointReceiptItemsRemove_OutputNO_CONTENT;
  };
  media: null;
}
export interface EndpointReceiptItemsRemove_InputQuery {
  id: string;
}
export interface EndpointReceiptItemsReorder {
  method: "post";
  input: {
    body?: EndpointReceiptItemsReorder_InputBody;
  };
  output: {
    OK: EndpointReceiptItemsReorder_OutputOK;
  };
  media: null;
}
export interface EndpointReceiptItemsReorder_InputBody {
  receiptId: string;
  itemIds: string[];
}
export interface EndpointReceiptItemsReorder_OutputOK {
  success: boolean;
}
export interface EndpointReceiptItemsUpdate {
  method: "post";
  input: {
    query?: EndpointReceiptItemsUpdate_InputQuery;
    body?: EndpointReceiptItemsUpdate_InputBody;
  };
  output: {
    OK: EndpointReceiptItemsUpdate_OutputOK;
  };
  media: null;
}
export interface EndpointReceiptItemsUpdate_InputQuery {
  id: string;
}
export interface EndpointReceiptItemsUpdate_InputBody {
  description?: string;
  quantity?: number;
  rate?: number;
  order?: number;
}
export interface EndpointReceiptItemsUpdate_OutputOK {
  id: string;
  receipt: string | null;
  description: string;
  quantity: number;
  rate: number;
  order: number;
}
export interface EndpointClientsCreate {
  method: "post";
  input: {
    body?: EndpointClientsCreate_InputBody;
  };
  output: {
    CREATED: EndpointClientsCreate_OutputCREATED;
  };
  media: null;
}
export interface EndpointClientsCreate_InputBody {
  name: string;
  address: string;
  email: string;
  phone: string;
}
export interface EndpointClientsCreate_OutputCREATED {
  id: string;
  name: string;
  address: string;
  email: string;
  phone: string;
  created: string;
  updated: string;
}
export interface EndpointClientsGetById {
  method: "get";
  input: {
    query?: EndpointClientsGetById_InputQuery;
  };
  output: {
    OK: EndpointClientsGetById_OutputOK;
  };
  media: null;
}
export interface EndpointClientsGetById_InputQuery {
  id: string;
}
export interface EndpointClientsGetById_OutputOK {
  id: string;
  name: string;
  address: string;
  email: string;
  phone: string;
  created: string;
  updated: string;
}
export interface EndpointClientsList {
  method: "get";
  input: {};
  output: {
    OK: EndpointClientsList_OutputOK;
  };
  media: null;
}
export interface EndpointClientsRemove {
  method: "post";
  input: {
    query?: EndpointClientsRemove_InputQuery;
  };
  output: {
    NO_CONTENT: EndpointClientsRemove_OutputNO_CONTENT;
  };
  media: null;
}
export interface EndpointClientsRemove_InputQuery {
  id: string;
}
export interface EndpointClientsUpdate {
  method: "post";
  input: {
    query?: EndpointClientsUpdate_InputQuery;
    body?: EndpointClientsUpdate_InputBody;
  };
  output: {
    OK: EndpointClientsUpdate_OutputOK;
  };
  media: null;
}
export interface EndpointClientsUpdate_InputQuery {
  id: string;
}
export interface EndpointClientsUpdate_InputBody {
  name: string;
  address: string;
  email: string;
  phone: string;
}
export interface EndpointClientsUpdate_OutputOK {
  id: string;
  name: string;
  address: string;
  email: string;
  phone: string;
  created: string;
  updated: string;
}
export interface EndpointSettingsGet {
  method: "get";
  input: {};
  output: {
    OK: EndpointSettingsGet_OutputOK;
  };
  media: null;
}
export interface EndpointSettingsGet_OutputOK {
  id: string;
  company_name: string;
  company_address: string;
  company_reg_no: string;
  company_email: string;
  company_tel_no: string;
  default_logo: string;
  default_payment_terms: string;
  default_notes: string;
  default_tax_rate: number;
  bank_name: string;
  bank_account: string;
  bank_account_name: string;
  currency: string;
  currency_symbol: string;
  invoice_prefix: string;
  next_invoice_number: number;
  receipt_prefix: string;
  next_receipt_number: number;
  created: string;
  updated: string;
}
export interface EndpointSettingsUpdate {
  method: "post";
  input: {
    body?: EndpointSettingsUpdate_InputBody;
  };
  output: {
    OK: EndpointSettingsUpdate_OutputOK;
  };
  media: {default_logo: {optional: true}};
}
export interface EndpointSettingsUpdate_InputBody {
  company_name?: string;
  company_address?: string;
  company_reg_no?: string;
  company_email?: string;
  company_tel_no?: string;
  default_payment_terms?: string;
  default_notes?: string;
  default_tax_rate?: number;
  bank_name?: string;
  bank_account?: string;
  bank_account_name?: string;
  currency?: string;
  currency_symbol?: string;
  invoice_prefix?: string;
  next_invoice_number?: number;
  receipt_prefix?: string;
  next_receipt_number?: number;
}
export interface EndpointSettingsUpdate_OutputOK {
  id: string;
  company_name: string;
  company_address: string;
  company_reg_no: string;
  company_email: string;
  company_tel_no: string;
  default_logo: string;
  default_payment_terms: string;
  default_notes: string;
  default_tax_rate: number;
  bank_name: string;
  bank_account: string;
  bank_account_name: string;
  currency: string;
  currency_symbol: string;
  invoice_prefix: string;
  next_invoice_number: number;
  receipt_prefix: string;
  next_receipt_number: number;
  created: string;
  updated: string;
}
