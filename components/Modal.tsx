'use client';

import React, { ChangeEvent, useState } from "react";
import { BiCog } from "react-icons/bi";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

const Modal = ( {onRegister} : {onRegister: (key: string) => void}) => {
    const [apiKey, setApiKey] = useState<string>("");

    const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
        setApiKey(e.target.value);
    };

    const handleRegister = () => {
        onRegister(apiKey);
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button 
                variant="outline"
                size="icon">
                    <BiCog className="h-4 w-4"/>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
            <DialogTitle>Edit API Key</DialogTitle>
            <DialogDescription>
                You can register your API key.
            </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                API Key
                </Label>
                <Input id="name" value={apiKey} onChange={handleInputChange} className="col-span-3"/>
            </div>
            </div>
            <DialogFooter>
            <Button onClick={handleRegister}>Save</Button>
            </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default Modal;