export interface IMoedaResponse {
    result: string;
    documentation: string;
    terms_of_use: string;
    time_last_update_unix: number;
    time_last_update_utc: string;
    time_next_update_unix: number;
    time_next_update_utc: string;
    base_code: string;
    conversion_rates: { [key: string]: number };
    taxa_conversao?: number;
    valor_convetido?: number; 
    conversion_rate: number;
}