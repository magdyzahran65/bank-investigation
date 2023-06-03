import axios from "axios";
import {
    BASE_URL,
    All_INVESTIGATIONS,
    All_REQUESTERS,
    All_REGIONS,
    All_USERS,
} from "@/constants/api-url";

//                  == ========================= ===
//                  == investigations functions  ===
//                  == ========================= ===

export async function getAllInvestigations(component) {
    const res = await axios.get(`${BASE_URL}${All_INVESTIGATIONS}`);
    try {
        component.investigations = res.data.results;
        component.AnimationNo();
    } catch (error) {
        console.log(error);
        component.AnimationNo();
    }
}

// ===========================================================
//                  == ========================= ===
//                  == Requesters functions  ===
//                  == ========================= ===

export async function getAllRequesters(component) {
    const res = await axios.get(`${BASE_URL}${All_REQUESTERS}`);
    try {
        // console.log(res);
        component.requesters = res.data.results;
        component.AnimationNo();
    } catch (error) {
        console.log(error);
        component.AnimationNo();
    }
}

// ===========================================================
//                  == ========================= ===
//                  == regions functions  ===
//                  == ========================= ===

export async function getAllRegions(component) {
    const res = await axios.get(`${BASE_URL}${All_REGIONS}`);
    try {
        component.regions = res.data.results;
        component.AnimationNo();
    } catch (error) {
        console.log(error);
        component.AnimationNo();
    }
}

// ===========================================================
//                  == ========================= ===
//                  == regions functions  ===
//                  == ========================= ===
export async function getAllUsers(component) {
    const res = await axios.get(`${BASE_URL}${All_USERS}`);
    try {
        component.users = res.data;
        component.AnimationNo();
    } catch (error) {
        console.log(error);
        component.AnimationNo();
    }
}
