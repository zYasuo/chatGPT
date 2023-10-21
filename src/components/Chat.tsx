"use client"

import { useChat } from 'ai/react';
import { Input } from "../components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { ScrollArea } from './ui/scroll-area';


export function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: '/api/chat',
    });


    return (
        <Card className="w-[440px]  bg-neutral-950">
            <CardHeader>
                <CardTitle className='text-slate-400'>
                    CHAT IA
                </CardTitle>
                <CardDescription>
                    Necessario ter créditos na API
                </CardDescription>
            </CardHeader>
            <CardContent className="bg-neutral-900">
                <ScrollArea className="h-[640px] space-y-4 p-6">
                    {messages.map(message => {
                        return (
                            <div key={message.id} className="flex gap-4 mb-4 text-slate-200 text-sm">
                                {message.role === 'user' && (
                                    <Avatar>
                                        <AvatarFallback>
                                            DA
                                        </AvatarFallback>
                                        <AvatarImage src="" />
                                    </Avatar>
                                )}
                                {message.role === 'assistant' && (
                                    <Avatar>
                                        <AvatarFallback>
                                            Chat
                                        </AvatarFallback>
                                        <AvatarImage src="" />
                                    </Avatar>
                                )}
                                <p className="leading-relaxed">
                                    <span className="block font-bold text-slate-400">
                                        {message.role === 'user' ? 'Usuário' : 'AI'};
                                    </span>
                                    {message.content}
                                </p>
                            </div>
                        )
                    })}
                </ScrollArea>
            </CardContent>
            <CardFooter>
                <form className="flex gap-3 mt-4" onSubmit={handleSubmit}>
                    <Input placeholder="Digite sua mensagem"
                        value={input}
                        onChange={handleInputChange}

                    />
                    <Button type="submit">Enviar</Button>
                </form>
            </CardFooter>
        </Card >
    )
}